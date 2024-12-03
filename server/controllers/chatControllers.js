const Chat = require("../models/chatModel");
const openai = require("../services/openAi");
const { uploadFileToCloudinary } = require("../config/cloudinaryConfig");


// Define health-related keywords
const HEALTH_KEYWORDS = [
    "health", "medicine", "treatment", "doctor", "symptom", "disease", "diagnosis", "therapy", "nutrition", "fitness", "pain", "test", "hi", "hello", "lab"
];

// create new Chat
const pdfParse = require("pdf-parse");

exports.createOrContinueChat = async (req, res) => {
    const userId = req.userId;
    const { message } = req.body;
    const file = req.files?.file;

    try {
        let fileUrl = '';
        let fileName = '';
        let fileContent = '';
        let fileAnalysis = '';

        if (file) {
            const folderName = `DoctorDirectAi/uploads`;
            const fileResult = await uploadFileToCloudinary(file[0], "raw", folderName);

            fileUrl = fileResult.secure_url;
            fileName = file[0].originalname;

            console.log("File uploaded to Cloudinary:", fileUrl);

            // Check file type and process accordingly
            if (file[0].mimetype === "application/pdf") {
                try {
                    const pdfData = await pdfParse(file[0].buffer);
                    fileContent = pdfData.text || "No readable content found in PDF.";
                } catch (err) {
                    console.error("Error parsing PDF:", err.message);
                    fileContent = "Unable to process the PDF content. It may be corrupted or incompatible.";
                }
            } else if (file[0].mimetype.startsWith("image/")) {
                try {
                    // Use OpenAI or another API for image analysis
                    const imageResponse = await openai.images.create({
                        model: "image-alpha-001",
                        prompt: `Analyze this medical image and describe its contents: ${fileUrl}`,
                        n: 1,
                        size: "256x256",
                    });
                    fileAnalysis = imageResponse?.data[0]?.description || "No insights found for the image.";
                } catch (err) {
                    console.error("Error analyzing image:", err.message);
                    fileAnalysis = "Unable to process the image. Please try again.";
                }
            }
        }

        const validMessage = message ? message.trim() : "";

        // Find or create a chat
        let chat = await Chat.findOne({ userId, status: "active" });

        if (!chat) {
            chat = await Chat.create({
                userId,
                messages: [
                    { sender: "User", message: validMessage, fileUrl, fileName },
                ],
                status: "active",
            });
        } else {
            chat.messages.push({ sender: "User", message: validMessage, fileUrl, fileName });
        }

        const aiPrompt = chat.messages.map((msg) => ({
            role: msg.sender.toLowerCase() === "user" ? "user" : "assistant",
            content: msg.message,
        }));

        if (fileContent) {
            aiPrompt.push({
                role: "user",
                content: `Here is the content of the uploaded PDF file:\n\n${fileContent}`,
            });
        }

        if (fileAnalysis) {
            aiPrompt.push({
                role: "user",
                content: `Here are the findings from the uploaded image file:\n\n${fileAnalysis}`,
            });
        }

        const aiResponse = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: aiPrompt,
        });

        const aiMessage = aiResponse.choices[0].message.content;
        chat.messages.push({ sender: "Ai", message: aiMessage });

        await chat.save();

        res.status(200).json({ message: "Chat updated successfully", chat });
    } catch (error) {
        console.error("Error creating or continuing chat:", error.response?.data || error.message);
        res.status(500).json({ message: "Error creating or continuing chat" });
    }
};



exports.completeChat = async (req, res) => {
    const userId = req.userId;

    try {

        // Find the active chat and mark it as completed
        const chat = await Chat.findOneAndUpdate(
            { userId, status: 'active' },
            { status: 'completed' },
            { new: true }
        );

        if (chat) {
            return res.status(200).json({ message: "Chat completed successfully", chat });
        } else {
            console.log('No active chat found. Query:', { userId, status: 'active' });
            return res.status(404).json({ message: "No active chat found", chat });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error completing chat" });
    }
};



// get active chats
exports.getActiveChat = async(req, res) => {
    const userId = req.userId;
    try{
        const chatHistory = await Chat.find({userId, status: "active"});
        return res.status(200).json({message: "chat history is fetched", chatHistory});
    } catch (error) {
        console.log(error)
    }
};

// get all chat
exports.getCompletedChat = async(req, res) => {
    const userId = req.userId;
    try{
        const chatHistory = await Chat.find({userId, status: "completed"});
        return res.status(200).json({message: "chat history is fetched", chatHistory});
    } catch (error) {
        console.log(error)
    }
};

// get specific chat
exports.getSpecificChat = async(req, res) => {
    const id = req.params.id;
    try {
        const specificChat = await Chat.findById(id);
        if(!specificChat) {
            return res.status(400).json({message: "Chat not exist"});
        }
        return res.status(200).json({message: "Specific Chat is Fetched", specificChat});
    } catch (error) {
        console.log(error)
    };
};

// update status to active
exports.changeStatusToActive = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedChat = await Chat.findByIdAndUpdate(
          id,
          { status: 'active' },
          { new: true } // Return the updated document
        );
    
        if (updatedChat) {
          return res.status(200).json({ message: 'Status changed to active', specificChat: updatedChat });
        } else {
          return res.status(404).json({ message: 'Chat not found' });
        }
      } catch (error) {
        console.error('Error changing chat status:', error);
        return res.status(500).json({ message: 'Server error' });
      }
};

//get last chat 
exports.getLastChat = async (req, res) => {
    const userId = req.userId;
    try {
        // Find the most recent chat for the user, sorted by creation date
        const lastChat = await Chat.findOne({ userId }).sort({ createdAt: -1 });
    
        if (!lastChat) {
            return res.status(404).json({ message: 'No chats found for the user' });
        }
        lastChat.status = "active";
        const updatedChat = await lastChat.save();
            return res.status(200).json({ updatedChat });
      } catch (error) {
        console.error('Error fetching the last chat:', error);
        return res.status(500).json({ message: 'Server error' });
      }
};