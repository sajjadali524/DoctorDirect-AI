import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const ChatHistory = () => {
  const [completedChat, setCompletedChat] = useState([]);

  useEffect(() => {
    const fetchCompletedChats = async() => {
      try {
        const response = await axios.get("https://doctordirect-ai.onrender.com/api/chat/completeChat", {withCredentials: true});
        setCompletedChat(response.data.chatHistory)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCompletedChats();
  }, []);

  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full px-3 ">
      <div className="lg:w-3/4 w-full relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[28px] font-[600]">Chat History</h1>
        </div>

        {completedChat.length < 1 ? <div className="w-full flex flex-col items-center justify-items-center pt-20">
          <div className="flex flex-col items-center justify-items-center text-center gap-5 lg:w-1/2 w-full">
            <IoChatbubblesOutline className="text-[50px]" />
            <p className="text-[25px] font-[600]">You don’t have any Chat History yet</p>
            <p className="text-[18px]">Start Chat with the DocAI Health Assistant to save and view your conversation history.</p>
            <Link
              to="/dashboard/chat/choose"
              className="flex items-center gap-3 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all"
            >Start Chat
            </Link>
          </div>
        </div> :
        <div className="flex flex-col gap-5 pb-10 w-full">
          {completedChat.map((val, index) => {
            return(
              <Link to={`/dashboard/chat/chat-history/${val._id}`} key={index} className="space-y-2 border p-3 border-slate-300 bg-white rounded-md ">
                <h1 className="text-[18px] font-[600]">Personal</h1>
                <div className="space-y-2">
                  <h1 className="text-[16px] font-[600]"><span className="text-[15px] font-normal">Type: </span>Personal AI Doctor</h1>
                  <h1 className="text-[16px] font-[600]"><span className="text-[15px] font-normal">created Date: </span>{val.createdAt}</h1>
                </div>
              </Link>
            )
          })}
            
          <Link
              to="/dashboard/chat/choose"
              className="flex items-center justify-center bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all"
            >Start New Chat
            </Link>
        </div>
        }

      </div>
    </div>
  )
}

export default ChatHistory
