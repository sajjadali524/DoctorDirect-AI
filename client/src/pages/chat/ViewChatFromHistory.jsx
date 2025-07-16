import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineAttachFile, MdSend } from "react-icons/md";
import { personal_ai_doctor } from "../../constants/images";
import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ViewChatFromHistory = () => {
  const username = localStorage.getItem("username");
  const [isToggle, setIsToggle] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const {id} = useParams();

  // Fetch the active chat from the database only once when the component loads
  const fetchSpecificChat = async () => {
    try {
      const response = await axios.get(
        `https://doctordirect-ai.onrender.com/api/chat/specificChat/${id}`,
        { withCredentials: true }
      );
      // console.log(response.data.specificChat.messages)
      if (response.data.specificChat) {
        setChatHistory(response.data.specificChat.messages);
      }
    } catch (error) {
      console.error("Error fetching active chat:", error);
    }
  };

  const changeStatusToActive = async () => {
    try {
      const response = await axios.put(
        `https://doctordirect-ai.onrender.com/api/chat/changestatustoactive/${id}`,
        {},
        { withCredentials: true }
      );
      // console.log(response.data.specificChat.messages)
      if (response.data.specificChat) {
        setChatHistory(response.data.specificChat.messages);
      }
    } catch (error) {
      console.error("Error fetching active chat:", error);
    }
  };

  useEffect(() => {
    fetchSpecificChat();
    changeStatusToActive();
  });

     // manage files
     const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const fileName = selectedFile.name; // Extract the file name with extension
        setFile(selectedFile); // Save the file in state
        setPreviewUrl(fileName); // Save just the file name for display
        setIsToggle(false)
      }
    };


  // Send a new message to the chat
  const sendChat = async (event) => {
    event.preventDefault();
  
    // Check if there is a message or a file
    if (!message.trim() && !file) {
      alert("Please enter a message or attach a file."); // Alert if nothing is entered
      return;
    }
  
    const formData = new FormData();
    if (message.trim()) {
      formData.append("message", message); // Add message if it's not empty
    }
    if (file) {
      formData.append("file", file); // Add file if selected
    }
  
    try {
      const response = await axios.post("https://doctordirect-ai.onrender.com/api/chat/newChat", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
        withCredentials: true
      });
      console.log("Chat created or updated:", response.data);
      // Reset message and file after sending
      setMessage(""); 
      setFile(null); 
      setPreviewUrl(""); // Reset file preview URL
    } catch (error) {
      console.error("Error creating or updating chat:", error);
    }
  };

  // // Start a new chat (go back to the previous page or reset chat)
  const goBack = async () => {
    window.history.back();
    try {
      const response = await axios.put(
        "https://doctordirect-ai.onrender.com/api/chat/chats",
        {},
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full h-screen px-3">
      <div className="lg:w-3/4 w-full relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={goBack}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[20px] font-[500]">{`${username} AI Doctor`}</h1>
        </div>

        {chatHistory.length === 0 && (
          <div className="w-full flex justify-center">
            <div className="flex items-center justify-center w-28 h-28 bg-lightBlue rounded-full">
              <img src={personal_ai_doctor} alt="img" className="w-20 h-20" />
            </div>
          </div>
        )}

        <div
          className={`chat-container grid w-full ${
            chatHistory.length > 0 &&
            "overflow-y-scroll h-[400px] pt-5 px-5 pb-10"
          }`}
        >
          <div className="flex flex-col items-end space-y-10">
            {/* Display Chat History */}
            {chatHistory.map((val, index) => {
              return(
                <p
                    key={`${index}-${val}`}
                    className={`flex gap-5 w-fit px-5 py-2 ${
                      val.sender === "User"
                        ? "border border-slate-200 rounded-lg opacity-80 text-black text-[18px]"
                        : "border border-slate-200 rounded-lg opacity-80 text-black text-[18px]"
                    }`}
                  >
                    {val.sender === "User" ? <FaUserCircle className="text-[20px] cursor-pointer mt-2"/> : <img src={personal_ai_doctor} alt="img" className="w-7 h-7" />}{val.message}
                    {val.fileUrl && (
                      <div>
                          <a href={val.fileUrl} target="_blank" rel="noopener noreferrer">
                              <span>{val.fileName}</span>
                          </a>
                      </div>
                    )}
                  </p>
              )
            })}
              
          </div>
        </div>

        <div className="space-y-3 w-full p-5 bg-white border border-slate-200 absolute bottom-5 rounded-lg">
          <input
            type="text"
            placeholder="Type your question here..."
            className="w-full outline-none bg-transparent"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {previewUrl && (
            <p className="text-[15px]">{previewUrl}</p>
          )}
          <div className="flex items-center justify-between">
            <MdOutlineAttachFile
              className="cursor-pointer text-[20px]"
              onClick={() => setIsToggle(!isToggle)}
            />
            <div className="flex items-center justify-center bg-darkBlue rounded-sm p-1">
              <MdSend
                className="cursor-pointer text-[20px] bg-darkBlue text-white"
                onClick={sendChat}
              />
            </div>
          </div>
        </div>

        {isToggle && (
          <div className="absolute space-y-1 left-5 bottom-16 shadow-lg transition-all bg-white w-[300px] p-3">
            <div className="w-full">
              <button
                className="flex items-center justify-center gap-1 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all w-full"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <MdOutlineAttachFile />
                Attach
              </button>
              <input type="file" id="fileInput" name="file" onChange={handleFileChange} style={{ display: "none" }} />
            </div>

            <p className="opacity-70 text-[14px]">Limitation</p>
            <p className="flex items-center gap-2 text-[14px] opacity-70">
              <CiFileOn className="text-[18px]" /> File format: PDF, PNG, JPG,
              JPEG
            </p>
            <p className="flex items-center gap-2 text-[14px] opacity-70">
              <MdOutlineAttachFile className="text-[18px] rotate-45 opacity-70" />{" "}
              Max file size: 15MB
            </p>
            <p className="flex items-center gap-2 text-[14px] opacity-70">
              <CiFileOn className="text-[18px]" /> Up to 3 pages
            </p>
            <span className="text-[14px] opacity-70 mt-10">
              Note: Text-based records only; no imaging (e.g., X-rays, MRIs).
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewChatFromHistory;