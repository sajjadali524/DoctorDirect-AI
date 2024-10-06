// home page Data
import { home_Hero, lab_test_interpretation, top_doctor, tailored_supplement, personal_ai_doctor } from "./images";
export const homeHero = [
    {
        title: "Your Personal Health Assistant",
        specialWord: "AI Doctor",
        position: "end",
        detail: "Prevent potential health issues and effectively manage your health. Gain insights with our AI Doctor and validate them with top paskistani doctors.",
        button: "Try AI for Free",
        path: "/welcome",
        image: home_Hero
    }
];

export const smartHealth = [
    {
        image: personal_ai_doctor,
        title: "Personal AI Doctor",
        detail: "Customize your personal AI Doctor. Simply complete your health profile, ask your health questions, and receive personalized, data-driven advice.",
        tasks: ["Get tailored insights", "Discover your health risks", "Get personal checkup plans", "Generate health reports", "Talk to ai doctor", "Get second openion"],
        button: "CHAT WITH AI DOCTOR",
        path: "/ai-doctor"
    },
    {
        image: lab_test_interpretation,
        title: "Lab Test Interpretation",
        detail: "Upload your lab results to receive in-depth biomarker interpretations and detailed lab test reports.",
        button: "GO TO LAB TESTS",
        path: "/lab-test-interpretation"
    },
    {
        image: tailored_supplement,
        title: "Tailored Supplements",
        detail: "Take the checkup quiz, get your personal supplement kit, and have it delivered straight to your door.",
        button: "GO TO SUPPLEMENTS",
        path: "/supplement"
    },
    {
        image: top_doctor,
        title: "Top Doctors Access",
        detail: "Connect with over 350 top doctors from the US and Europe for expert second opinions and validation of AI-driven health insights.",
        button: "GET SECOND OPENION",
        path: "/second-openion"
    },
];

import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { LiaStreetViewSolid } from "react-icons/lia";
import { LiaBookSolid } from "react-icons/lia";
export const hacHomeTitle = "Benefits of Personal AI Health Assistant";
export const hacHomeDesc = "We have all you need to better understand your health and make informed and accurate decisions about your well-being.";
export const hacHomeButton = "try AI for Free";
export const hacHome = [
    {
        image: LiaHandHoldingHeartSolid,
        title: "Proactive Preventive Care",
        detail: "Utilize predictive analytics and expert advice to identify and manage health risks early, ensuring your long-term wellness.",
    },
    {
        image: LiaStreetViewSolid,
        title: "Tailored Health Solutions",
        detail: "Get health support tailored to your needs with personalized plans and strategies, available 24/7 to seamlessly fit your lifestyle.",
    },
    {
        image: LiaBookSolid,
        title: "In-Depth Health Insights",
        detail: "Gain a deeper understanding of your health with clear, actionable insights, helping you make informed decisions effortlessly.",
    },
];

import { GoKey } from "react-icons/go";
import { GoShieldCheck } from "react-icons/go";
export const homeSecureHealth = [
    {
        image: GoKey,
        detail: "No personally identifiable information is required to utilize the DocAI Health Assistant and its associated features.",
    },
    {
        image: GoShieldCheck,
        detail: "Any data shared while using our services is safeguarded by advanced security protocols, ensuring compliance with HIPAA and GDPR.",
    },
];

import { eric_s, sofia_r, peter_s, aisha_h, alex_t, casey_r } from "./images";
export const homeTestimonialTitle = "Our Users Love Us";
export const homeTestimonialDesc = "Discover how DocAI has transformed the way people understand and manage their health.";
export const homeTestimonials = [
    {
        author: "Eric S.",
        image: eric_s,
        detail: "As an athlete, maintaining optimal health is crucial. Docus has been a game-changer for me. Its AI Doctor is amazing, providing insights that help me fine-tune my training regimen and nutrition. I'm so thrilled to have found DocAI."
    },
    {
        author: "Alex T.",
        image: alex_t,
        detail: "Dealing with health anxiety, every new symptom used to send me down a rabbit hole of worry and speculation. Discovering Docus has been transformative for my mental and physical well-being. Docus AI Doctor provides clear, concise insights, guiding me on when to seek professional help. It's been an essential tool in managing my health anxiety, helping me approach my concerns with calm and confidence."
    },
    {
        author: "Casey R.",
        image: casey_r,
        detail: "DocAI enabled me to conveniently secure a second opinion from a top US doctor, saving both time and travel expenses. I appreciate the seamless and hassle-free experience they provided, ensuring access to expert medical advice."
    },
    {
        author: "Peter S.",
        image: peter_s,
        detail: "The speed and accuracy of the Docus AI Health Assistant were truly impressive. It provided me with the confidence I needed to proceed with my treatment, knowing that I had reliable guidance and support along the way."
    },
    {
        author: "Aisha H.",
        image: aisha_h,
        detail: "Entering menopause was a bit daunting with all the changes my body started to go through. The Docus AI Doctor helped me identify my symptoms like hot flashes and mood swings as menopausal. Knowing what was happening gave me peace of mind and the confidence to seek the right treatment. I'm grateful for such a supportive tool."
    },
    {
        author: "Sofia R.",
        image: sofia_r,
        detail: "My son had recurring stomach aches, and I wasn't sure if it was his diet or something more serious. Docus AI Doctor suggested possible food intolerance and recommended seeing a specialist. It turned out to be lactose intolerance, and we've since adjusted his diet. I'm so grateful for the guidance that led us to find a solution."
    },
];

export const homeFaqs = [
    {
        title: "What is DocAI?",
        detail: "DocAi is a Personal Health Assistant powered by advanced AI technology. It provides personalized health management, proactive care, and detailed insights, integrating features like AI Doctor consultations, lab test interpretations, tailored supplements, and more to support your health decisions."
    },
    {
        title: "How can I get started with DocAi and manage my health?",
        detail: "Getting started with Docus is straightforward. First, sign up on our platform and complete your health profile. Once set up, you can immediately begin exploring a variety of features. Use the Supplement Checkup for personalized supplement plans, or Lab Test Interpretation for detailed biomarker analysis. For interactive support, chat with your personal AI Doctor to ask health questions and get instant answers. Additionally, you can consult with top doctors for expert second opinions, all accessible from your personalized dashboard."
    },
    {
        title: "What kind of health issues can DocAI help with?",
        detail: "What kind of health issues can Docus help with? DocAI can assist with a range of health issues from routine wellness queries and symptom checks to more complex health conditions. It provides lab test interpretations, tailored health supplements, and expert consultations for a comprehensive health management experience. Plus, your personal AI Doctor is available 24/7 for any health-related queries."
    },
    {
        title: "How reliable are the health insights provided by DocAI?",
        detail: "The insights from DocAI are based on AI algorithms trained on a wide range of medical data, designed to provide accurate and up-to-date health information. However, while Docus aims for precision, it is best used as a tool alongside professional medical advice."
    },
    {
        title: "What is DocAI Doctor?",
        detail: "The DocAI Doctor is an advanced medical chatbot that acts as your virtual health assistant. It utilizes sophisticated AI technology to analyze your health information and respond to your queries in real-time. Whether you have questions about symptoms, need help interpreting lab results, or are seeking health advice, the AI Doctor provides accurate, personalized insights based on your health profile, making it an invaluable tool for day-to-day health management."
    },
    {
        title: "How do I get a second opinion through DocAI?",
        detail: "For a second opinion, navigate to the ‘Consult Top Doctors’ feature where you can choose from over 350 top doctors. Alternatively, when interacting with the AI Doctor, select the 'Suggest Top Doctor' action, and it will recommend the most relevant doctors for your health condition. Simply select a doctor, submit a request for a consultation through our platform, and we will arrange for an expert to review your case and provide their opinion."
    },
    {
        title: "Can DocAI replace my doctor?",
        detail: "No, DocAI is designed to supplement your healthcare experience by providing AI-driven insights and access to expert medical opinions. It offers preliminary guidance and can help prepare you for more informed discussions with healthcare professionals, but it is not a substitute for direct medical advice from a doctor."
    },
    {
        title: "How do I ensure my health data is safe with DocAI?",
        detail: "We prioritize your privacy and data security. Our platform is compliant with HIPAA and GDPR standards. All personal health information provided to Docus is encrypted and stored securely."
    },
    {
        title: "Why should I choose DocAI as my Personal Health Assistant?",
        detail: "Choose DocAI for 24/7 health support and personalized health management plans tailored to your unique needs. Docus stands out from other health apps by combining AI-driven insights with access to over 350 top doctors, providing a perfect blend of technology and expert human advice. This unique approach ensures comprehensive, proactive care and easy-to-understand insights for all your health concerns."
    },
];

// ai doctor page Data 
import { aidoctor_Hero } from "./images";
export const aiDoctorHero = [
    {
        title: " for all your health questions",
        specialWord: "AI Doctor",
        position: "start",
        detail: "DocAI Doctor can be your first step toward an accurate diagnosis. Get recommendations, validate with top doctors, and stay healthy.",
        button: "Try AI for Free",
        path: "/welcome",
        image: aidoctor_Hero
    }
];

import { ai_doctor_image_1, ai_doctor_image_2,ai_doctor_image_3 } from "./images";
export const aidoctorHealthjourneyTitle = "Transforming Healthcare with AI Doctor";
export const aidoctorHealthJourney = [
    {
        title: "Personalize Your Health Journey",
        detail: "Complete your health profile to unlock a customized AI Doctor experience, tailored to your health needs.",
        subItems: [
            {
                subTitle: "Chat with Your Personal AI Doctor",
                subDetail: "Chat with an AI that knows your health history and provides responses and recommendations based on your personal health data.",
            },
            {
                subTitle: "Discover Your Health Risks",
                subDetail: "Identify potential health risks through an analysis of your health profile. Gain valuable insights with detailed explanations and recommendations.",
            },
            {
                subTitle: "Receive a Personal Checkup Plan",
                subDetail: "Based on your health data and identified risks, receive a customized checkup plan recommending key tests and screenings for proactive health management.",
            },
        ],
        button: "Start Journey",
        image: ai_doctor_image_1,
        path: "/welcome"
    },
    {
        title: "Consult Your AI Doctor",
        detail: "Share your symptoms, health condition, and any health-related questions while chatting with your AI Doctor.",
        subItems: [
            {
                subTitle: "Find Probability of Diseases (DDx)",
                subDetail: "Receive estimated probabilities of conditions that guide you toward understanding potential diagnoses.",
            },
            {
                subTitle: "Explore Treatment Options",
                subDetail: "Receive information on potential treatment options and other health recommendations to discuss with your doctor.",
            },
            {
                subTitle: "Generate Health Reports",
                subDetail: "Generate detailed reports from AI interactions to enhance discussions with your doctor.",
            },
        ],
        button: "Start Chat",
        image: ai_doctor_image_2,
        path: "/welcome"
    },
    {
        title: "Validate Your Recommendations",
        detail: "Continue your health journey. Validate your potential diagnosis and treatment strategy with top doctors from the US and Europe.",
        subItems: [
            {
                subTitle: "Identify the Right Specialty",
                subDetail: "Based on your health profile and conversations, your AI Doctor identifies the most relevant medical specialties for your condition.",
            },
            {
                subTitle: "Get Doctor Recommendations",
                subDetail: "Dr. AI recommends the most appropriate doctors from our extensive network of over 350 professionals for consultation.",
            },
            {
                subTitle: "Request a Consultation",
                subDetail: "Select an expert for a second opinion on your health condition and request a consultation through written feedback or a video call.",
            },
        ],
        button: "View Doctors",
        image: ai_doctor_image_3,
        path: "/welcome"
    },
];

import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { PiHeadCircuitFill } from "react-icons/pi";
export const hacAidoctorTitle = "Benefits of Personal AI Health Assistant";
export const hacAidoctorButton = "Explore AI Doctor";
export const hacAidoctor = [
    {
        image: MdOutlineAccessTimeFilled,
        title: "24/7 Availability",
        detail: "Dr. AI has no working hours and never gets tired. Use our chatbot anytime, anywhere, and ask as many questions as you want.",
    },
    {
        image: FaHandHoldingMedical,
        title: "Personalization",
        detail: "AI Doctor screenings are tailored to your specific needs, health history, and even lifestyle habits, helping to closely align AI with medical diagnoses.",
    },
    {
        image: PiHeadCircuitFill,
        title: "Powered by NLP Models",
        detail: "Our AI Doctor is driven by a natural language model, which enables it to approach your health inquiries with advanced intelligence and understanding.",
    },
];

import { TiInfoOutline } from "react-icons/ti";
export const aidoctorSecureHealth = [
    {
        image: TiInfoOutline,
        detail: "No online tool can replace professional medical advice. Always consult a professional before taking any action.",
    },
    {
        image: GoKey,
        detail: "DocAI Doctor doesn’t need any personally identifiable information to provide you with relevant insights and recommendations.",
    },
    {
        image: GoShieldCheck,
        detail: "Any data shared while using our services is safeguarded by advanced security protocols, ensuring compliance with HIPAA and GDPR.",
    },
];

import { monica_a, emiley_g, harrey_l } from "./images";
export const aidoctorTestimonialTitle = "Hear From Our Users";
export const aidoctorTestimonialDesc = "Discover how our AI Doctor has positively impacted lives.";
export const aidoctorTestimonials = [
    {
        author: "Monica A.",
        image: monica_a,
        detail: "I've never felt more empowered in my health journey than I do with DocAI Doctor. It provides instant, reliable health insights that are easy to understand. It's not intended to replace my doctor, but it complements my healthcare routine perfectly by offering a readily available second opinion. Everyone should use this!"
    },
    {
        author: "Harry L.",
        image: harrey_l,
        detail: "DocAI Doctor has made a significant difference in the way I approach my health. 24/7 it provides prompt, understandable responses to my health concerns. It's given me peace of mind and empowered me to be more proactive about my health. Truly, an invaluable tool for anyone interested in their health and well-being."
    },
    {
        author: "Emily G.",
        image: emiley_g,
        detail: "Using AI Doctor has been a game-changer for me. I love that I can ask health-related questions anytime, from anywhere. It's like having a virtual health assistant in my pocket. It's not only convenient, but it also makes understanding complex health topics easier."
    }
];

export const aidoctorFaqs = [
    {
        title: "What is the AI Doctor?",
        detail: "AI Doctor is the chatbot feature of Docus AI Health Assistant, designed to provide health-related information, recommendations, and support. It analyzes your medical history, symptoms, and other relevant factors to assist you with preliminary guidance through interactive communication."
    },
    {
        title: "How do I interact with the AI Doctor?",
        detail: "To interact with the AI Doctor, first sign up on the Docus Platform and complete your health profile. Then navigate to your personal AI Doctor section. Simply enter your health-related questions or concerns in the chat area, and the AI Doctor will analyze your inputs and provide responses tailored to your needs."
    },
    {
        title: "Is the AI Doctor a replacement for a doctor?",
        detail: "While the AI Doctor provides valuable health insights, it is not intended to replace the expertise of a real doctor. It offers preliminary guidance and general information, and we recommend consulting with a healthcare professional for specific health concerns or medical advice."
    },
    {
        title: "How accurate is the information provided by the AI Doctor?",
        detail: "The AI Doctor strives to provide accurate and relevant information based on advanced AI modeling and training. However, for definitive diagnoses and treatment plans, consulting with a healthcare professional is essential."
    },
    {
        title: "Is my personal information secure when using the AI Doctor?",
        detail: "Your privacy is a top priority for us. The DocAI Health Assistant ensures that all data, including interactions with the AI Doctor, are protected with advanced encryption and security protocols, fully compliant with HIPAA and GDPR standards."
    },
    {
        title: "Can the AI Doctor diagnose medical conditions?",
        detail: "The AI Doctor can suggest potential medical conditions based on the differential diagnosis process from the information you provide, but it cannot make definitive medical diagnoses. Always seek a professional evaluation for an accurate diagnosis."
    },
    {
        title: "Can the AI Doctor prescribe medications?",
        detail: "The AI Doctor does not have the capability to prescribe medications. Medication prescriptions require a licensed healthcare professional who can evaluate your specific medical needs."
    },
    {
        title: "Is the AI Doctor available 24/7?",
        detail: "Yes, the AI Doctor is available 24/7, allowing you to access health assistance anytime and anywhere, regardless of your subscription plan."
    },
    {
        title: "Can I use the AI Doctor for emergency situations?",
        detail: "The AI Doctor is not equipped to handle emergency situations. In case of an emergency, contact your local emergency services or visit the nearest emergency room immediately."
    },
];

// lab test interpretaion page Data 
import { lti_Hero } from "./images";
export const ltiHero = [
    {
        title: "Get Actionable Insights from Your",
        specialWord: "Lab Tests",
        position: "end",
        detail: "Our AI Doctor can easily analyze and interpret your lab tests, providing clear and actionable health information.",
        tasks: ["Upload your lab tests", "Receive valuable insights and recommendations", "Make informed health decisions"],
        button: "Try for Free",
        path: "/welcome",
        image: lti_Hero
    }
];

export const hacltiTitle = "Simple Steps to Better Health";
export const hacltiDesc = "Experience a streamlined process that turns your lab results into actionable health insights with just a few clicks.";
export const hacltiUsers =[
    {
        title: "100k+",
        detail: "Blood Tests"
    },
    {
        title: "30k+",
        detail: "Urine Tests"
    },
    {
        title: "50k+",
        detail: "Other Tests"
    },
];
export const haclti = [
    {
        text: "01",
        title: "Upload Your Tests",
        detail: "Upload your lab test results as PDFs, Our system supports various methods to ensure a smooth and easy process.",
    },
    {
        text: "02",
        title: "Get AI-Powered Analysis",
        detail: "Our AI Doctor analyzes your results using the latest medical guidelines. It evaluates biomarkers, identifies patterns, and assesses risk factors, ensuring that nothing is overlooked.",
    },
    {
        text: "03",
        title: "Receive Detailed Report",
        detail: "Get a comprehensive lab test report that identifies abnormalities and their health implications, along with clear insights and practical suggestions.",
    },
];

import { lti_image_1, lti_image_2, lti_image_3 } from "./images";
export const ltiHealthjourneyTitle = "Unlock the Power of Docus AI Lab Analysis";
export const ltiHealthJourney = [
    {
        title: "In-depth Biomarker Analysis",
        detail: "Our AI system simplifies complex lab data into clear, easy-to-understand visual interpretations:",
        subItems: [
            {
                subTitle: "Detailed Biomarker Information",
                subDetail: "See each biomarker's measured value, normal range, and status (normal, high, or low).",
            },
            {
                subTitle: "In-depth Explanations",
                subDetail: "Receive explanations for out-of-range values, including potential health risks and related conditions.",
            },
            {
                subTitle: "Trend Tracking",
                subDetail: "Monitor biomarker changes over time with dynamic graphs that highlight trends from various tests.",
            },
        ],
        button: "Explore Your Biomarkers",
        image: lti_image_1,
        path: "/welcome"
    },
    {
        title: "Detailed Lab Test Reports",
        detail: "Receive detailed lab test reports for better understanding and proactive health management. Each report includes:",
        subItems: [
            {
                subTitle: "Test Interpretation",
                subDetail: "Understand the meanings behind your test results with clear explanations.",
            },
            {
                subTitle: "Clinical Significance",
                subDetail: "Learn about the implications of your results and their potential impact on your health.",
            },
            {
                subTitle: "Recommendations",
                subDetail: "Receive actionable advice based on your lab results to help manage and improve your health.",
            },
        ],
        button: "Get Your Report",
        image: lti_image_2,
        path: "/welcome"
    },
    {
        title: "Interaction with AI Doctor",
        detail: "Consult our AI Doctor to clarify any questions about your lab results. It provides:",
        subItems: [
            {
                subTitle: "Detailed Explanations",
                subDetail: "Get clear answers to any additional questions about your lab tests, biomarker analysis, or lab test report.",
            },
            {
                subTitle: "Tailored Advice",
                subDetail: "Get practical steps and strategies tailored to improve your health.",
            },
            {
                subTitle: "Specialist Referrals",
                subDetail: "Access our network of 350+ top doctors for further expert consultation if needed.",
            },
        ],
        button: "Talk to AI Doctor",
        image: lti_image_3,
        path: "/welcome"
    },
];


export const ltiSecureHealth = [
    {
        image: GoKey,
        detail: "We don't need any personally identifiable information to analyze your lab tests. Feel free to crop or black out any personal details.",
    },
    {
        image: GoShieldCheck,
        detail: "Any data shared while using our services is safeguarded by advanced security protocols, ensuring compliance with HIPAA and GDPR.",
    },
];

import { blood_test, urine_test, pap_test, semen_test, stool_test, swab_test } from "./images";
export const supportedLabTestCard = [
    {
        image: blood_test,
        title: "Blood Test",
        detail: "Overall health, ammune system, organ function, etc."
    },
    {
        image: urine_test,
        title: "Urine Test",
        detail: "Kidney function, urinary tract infections, etc."
    },
    {
        image: swab_test,
        title: "Swab Test",
        detail: "Bacterial function, viruses, fungal infections, etc."
    },
    {
        image: stool_test,
        title: "Stool Test",
        detail: "Digestive conditions, infections, parasites, etc."
    },
    {
        image: pap_test,
        title: "Pap Smear",
        detail: "Precancerous conditions, cervical cancers, HPV, etc."
    },
    {
        image: semen_test,
        title: "Semen Analysis",
        detail: "Sperm count, motility, morphology, fertility issues."
    },
];

export const ltiTestimonialTitle = "Hear from Our Users";
export const ltiTestimonialDesc = "Discover the experiences of real users who have transformed their health with our AI-driven lab test interpretations.";
export const ltiTestimonials = [
    {
        author: "James, 42 y.o.",
        image: eric_s,
        detail: "After uploading my blood test results to Docus, I was amazed to see the detailed analysis pointing out my elevated cholesterol levels. The report explained the risks associated with this and offered practical dietary recommendations. It's been enlightening to see such precise insights about my health."
    },
    {
        author: "Anita, 29 y.o.",
        image: sofia_r,
        detail: "After my Pap smear results came back unclear, I used DocAI for a second opinion. The analysis confirmed HPV presence and explained its implications clearly. Based on the detailed insights, I was advised to consult a gynecologist for further management. This guidance was incredibly valuabl."
    },
    {
        author: "Maria, 35 y.o.",
        image: emiley_g,
        detail: "I never knew how my diet affected my kidney function until I used Docus for my urine tests. The clear explanations helped me understand my slightly abnormal results and the importance of hydration and diet adjustments. This service has been an eye-opener for managing my health proactively."
    },
    {
        author: "Derek, 54 y.o.",
        image: peter_s,
        detail: "DocAI Doctor identified a bacterial infection from my stool and swab tests, which I had missed. The detailed report advised seeing a specialist, which I did immediately. This timely advice was crucial for my treatment."
    },
];

import { lti_image_4 } from "./images";
export const lrassLti = [
    {
        title: "Uncover Key Insights of Your Lab Results",
        detail: "Start managing your health smarter! Upload your lab tests, receive detailed interpretations and personalized recommendations from our AI Doctor, and take action based on informed insights.",
        image: lti_image_4,
        button: "Talk to AI Doctor",
        path: "/welcome"
    }
];

export const ltiFaqs = [
    {
        title: "How does the AI analyze and interpret my lab test results?",
        detail: "Our AI technology examines your test results to provide detailed health insights. It compares your data against standard reference ranges and crafts a comprehensive report to help you understand your health indicators clearly."
    },
    {
        title: "What should I do if I don't understand my report?",
        detail: "If your report seems complex, our AI Doctor is here to help. Chat directly to receive further explanations and insights about your specific results."
    },
    {
        title: "Is this analysis considered a medical diagnosis?",
        detail: "No, our analysis offers insights to aid your understanding of health trends and markers but is not a substitute for a medical diagnosis or a treatment plan. Always consult a healthcare professional for medical advice and treatment."
    },
    {
        title: "What steps should I take after receiving my analysis report?",
        detail: "Review your report thoroughly and discuss it with your AI Doctor for any clarifications. For a deeper understanding, consider taking your report to a healthcare professional. Follow any suggested actions, and plan regular health checkups as recommended."
    },
    {
        title: "How is my health data protected?",
        detail: "Your data's security is our top priority. We use industry-standard encryption and robust security protocols to ensure that your health information is protected and accessible only to authorized personnel."
    },
    {
        title: "What types of lab tests can I analyze on this platform?",
        detail: "You can upload and analyze a wide range of lab tests, including blood, urine, stool, Pap smears, semen analyses, and swab tests."
    },
    {
        title: "How quickly will I receive my analysis report?",
        detail: "Reports are typically generated within minutes of uploading your tests, allowing you to gain rapid insights into your health status."
    },
];

// supplement page Data 
import { supplement_Hero } from "./images";
export const supplementHero = [
    {
        title: " Tailored to Your Unique Needs",
        specialWord: "Supplements",
        position: "start",
        detail: "Discover the perfect supplements designed specifically for your health goals.",
        tasks: ["Take the Checkup Quiz", "Get Your Personalized Report", "Order Your Tailored Supplement Kit"],
        button: "Take the Quiz",
        path: "/welcome",
        image: supplement_Hero
    }
];

import { TfiWorld } from "react-icons/tfi";
import { IoNewspaper } from "react-icons/io5";
export const hacSupplementTitle = "Trusted by thousands";
export const hacSupplementDesc = "Join the community of health-conscious individuals who trust Docus for their supplement needs.";
export const hacSupplementUsers =[
    {
        image: FaHandHoldingMedical,
        title: "200k+",
        detail: "Users Assisted"
    },
    {
        image: IoNewspaper,
        title: "500k+",
        detail: "Checkups"
    },
]
export const hacSupplement = [
    {
        image: LiaStreetViewSolid,
        title: "Personalized Approach",
        detail: "Our AI Doctor personalizes the checkup process to tailor supplements specifically to your unique health needs.",
    },
    {
        image: TiInfoOutline,
        title: "Doctor-Trusted Ingredients",
        detail: "We use the highest quality ingredients trusted by healthcare professionals. All Docus supplements are GMP-certified.",
    },
    {
        image: TfiWorld,
        title: "Fully Online Experience",
        detail: "Enjoy a seamless online process, from taking the quiz to receiving your supplement kit at your doorstep.",
    },
];

export const hiwSupplementTitle = "How it Works";
export const hiwSupplementDesc = "Experience the easy, fully online process for receiving your tailored supplements, powered by DocAI Doctor.";
export const hiwSupplementButton = "Start Your Checkup Quiz";
export const hiwSupplement = [
    {
        title: "1. Take the Checkup Quiz",
        detail: "Answer a few simple questions about your health and lifestyle to help us understand your needs. (3-5 min)"
    },
    {
        title: "2. Review Your Supplement Kit",
        detail: "Explore a customized supplement kit designed specifically for your unique health goals. (1 min)"
    },
    {
        title: "3. Get Your Personalized Report",
        detail: "Receive a detailed report explaining your tailored supplement kit and additional recommendations. (2 min)"
    },
    {
        title: "4. Order Your Supplement Kit",
        detail: "Easily place an order for your personalized supplement kit and get it delivered to your doorstep. (2 min)"
    }
];

import { review_product } from "./images";
export const lrassSupplemtent = [
    {
        title: "Order Your Personal Supplement Kit",
        detail: "Start your wellness journey today! Take the checkup quiz, receive tailored recommendations from our AI Doctor, customize your supplements, and have them delivered straight to your door.",
        image: review_product,
        button: "Talk to AI Doctor",
        path: "/welcome"
    }
];

import { dorothey_a } from "./images";
export const supplementTestimonialTitle = "Hear From Our Users";
export const supplementTestimonialDesc = "Discover how our AI Doctor has positively impacted lives.";
export const supplementTestimonials = [
    {
        author: "Dorothy A.",
        image: dorothey_a,
        detail: "Since using my personalized supplement kit, I've felt a significant boost in my energy levels and overall wellness. Now I fully trust Docus for my supplement needs. Thank you!"
    },
    {
        author: "Matthew R.",
        image: eric_s,
        detail: "The process was simple and the results have been amazing. My custom supplements have helped me feel more balanced and healthier every day."
    },
    {
        author: "Joseph K.",
        image: harrey_l,
        detail: "I was skeptical at first, but the quality of the supplements and the noticeable improvement in my health have made me a believer. Docus really knows my health needs and has provided me with exactly what I was missing."
    },
    {
        author: "Nancy L.",
        image: sofia_r,
        detail: "From the detailed report to the delivery, everything was seamless and hassle-free. I've never felt better, and I owe it all to the personalized approach from Docus. My sleep issues have been resolved, and I feel more rested and energetic than ever."
    },
];

export const supplementFaqs = [
    {
        title: "How does DocAI create my supplement kit?",
        detail: "Your supplement kit is designed based on the information you provide in our checkup quiz. Our AI Doctor analyzes your responses to select supplements that address your specific health needs and goals, ensuring a personalized approach to your wellness."
    },
    {
        title: "How long will it take to receive my order?",
        detail: "Typically, orders are processed within 1-2 days. Once processed, your order will be delivered via USPS, which can take 1-4 days depending on your location. You can track your order on the order page for the most accurate delivery estimate."
    },
    {
        title: "How should I take my supplements?",
        detail: "Detailed dosage and timing recommendations are provided on each supplement’s packaging. Please follow these instructions carefully to ensure you get the best results."
    },
    {
        title: "Are DocAI supplements safe for everyone?",
        detail: "While our supplements are generally safe, certain individuals, such as pregnant or nursing mothers, children under 18, and those with specific health conditions, should consult a healthcare professional before use. Always read the caution text provided in your supplement report for more detailed information."
    },
    {
        title: "Can I take these supplements with other medications?",
        detail: "It's important to consult with a healthcare professional before combining supplements with other medications, as some supplements can interact with medications or exacerbate existing health issues."
    },
    {
        title: "What should I do if I experience side effects?",
        detail: "If you experience any adverse effects, discontinue use immediately and consult a healthcare professional. Report any side effects to ensure your safety and well-being."
    },
    {
        title: "How do I monitor the effects of my supplements?",
        detail: "Use the tips provided in your supplement report, including regular check-ins with yourself, utilizing the Docus AI Doctor, and having routine health check-ups and lab tests to track your progress."
    },
    {
        title: "Can the supplement kit and supplement report replace professional medical advice?",
        detail: "No, these supplements are intended to complement your health regimen and provide additional support. They should not replace professional medical advice, diagnosis, or treatment."
    },
    {
        title: "What areas of health do Docus supplements support?",
        detail: "DocAI supplements support various health areas including energy levels, immune support, cognitive health, digestive health, skin, hair, and nails, and joint and muscle health."
    },
];


// Second Openion Page Data
export const secondOpenionHowItWork = [
    {
        number: "1",
        title: "Choose a Doctor",
        detail: "Find the right doctor among 350+ top doctors. Choose your preferred consultation type - written or video."
    },
    {
        number: "2",
        title: "Communicate health conditions",
        detail: "Provide details about your symptoms, medical history, test results, and any relevant information about your condition."
    },
    {
        number: "3",
        title: "Receive a medical second opinion",
        detail: "Based on provided details, the expert will share their medical second opinion during the consultation."
    },
];

import { MdSelfImprovement } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
export const hacSecondOpenionTitle = "Benefits for patients & caregivers";
export const hacSecondOpenionButton = "Explore Top Doctors";
export const hacSecondOpenion = [
    {
        image: TfiWorld,
        title: "Access to world-class doctors",
        detail: "Get access to world-class knowledge and expertise. Maximize your chances of receiving accurate diagnosis and treatment.",
    },
    {
        image: MdSelfImprovement,
        title: "Affordability",
        detail: "No need to leave your home. Save your time and effort, eliminate the stress and travel expenses.",
    },
    {
        image: GiThreeLeaves,
        title: "Peace of mind",
        detail: "Obtain peace of mind and reassurance, knowing that you have explored all available options and made the best possible decision for your health.",
    },
];

export const secondOpenionSecureHealth = [
    {
        image: GoKey,
        detail: "Docus AI Health Assistant is not a real doctor, even though it is trained on a vast amount of medical data. Unless reviewed by your local physician, the provided information is for educational and general purposes only.",
    },
    {
        image: GoShieldCheck,
        detail: "We strongly recommend not to share any personally identifiable information while using Docus AI Health Assistant. Before sharing any information, please ensure all direct identifiers such as your name, address, or social security number are removed.",
    },
];

export const secondOpenionFaqs = [
    {
        title: "What is DocAI?",
        detail: "DocAI is an AI-powered health platform that improves the health of humans through the combination of cutting-edge technologies and top medical expertise."
    },
    {
        title: "Is the DocAI a replacement for my local doctor?",
        detail: "No, DocAI is not a replacement for your local doctor. It is designed to provide additional insights and expertise to complement the advice of your primary healthcare provider, helping you make more informed decisions about your healthcare."
    },
    {
        title: "How to get a second opinion?",
        detail: "For getting a medical second opinion, select a doctor from the Doctors Listing page, complete the form, and our specialists will be in touch with you shortly. If you need assistance in choosing the most suitable doctor for your case, fill out a contact form, and our support team will guide you in connecting with the appropriate doctor."
    },
    {
        title: "How much does it cost to get a second opinion?",
        detail: "The cost of getting a medical second opinion varies depending on the doctor's consultation fees and the type of consultation (video or written). The platform aims to keep costs affordable by connecting patients directly with doctors, eliminating institutional markups and additional operational expenses."
    },
    {
        title: "Is there a chance to get a second opinion for free?",
        detail: "Yes. You can interact with DocAI Health Assistant. Just type in your questions or concerns in the designated chatbot, and the assistant will provide a response based on the information you provide. Remember, that even though the DocAI Health Assistant acts as an AI Doctor but it is not intended to replace the expertise of a real doctor."
    },
    {
        title: "Is my personal information secure when using the platform?",
        detail: "While it is not recommended to share any personal data when using the AI Health Assistant, rest assured that Docus AI-powered health platform prioritizes your privacy and uses advanced encryption and security protocols in compliance with HIPAA and GDPR standards."
    },
    {
        title: "Can I share the second opinion with my local doctor?",
        detail: "Yes, it is encouraged to share the second opinion you receive from the platform with your local doctor. This collaborative approach ensures that you receive comprehensive guidance and can make well-informed decisions about your healthcare."
    },
    {
        title: "How long does it take to receive a medical second opinion?",
        detail: "The time it takes to receive a medical second opinion can vary depending on the doctor's availability and the complexity of your case. Generally, you can expect to receive a medical second opinion within a few days after submitting your case details and medical records."
    },
    {
        title: "Can I use the second opinion platform for emergency situations?",
        detail: "No, DocAI platform is not designed for emergency situations. If you are experiencing a medical emergency, call your local emergency number or visit the nearest emergency room."
    },
];