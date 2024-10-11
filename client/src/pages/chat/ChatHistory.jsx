import { FaArrowLeftLong } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ChatHistory = () => {
  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full h-screen px-3 ">
      <div className="lg:w-3/4 w-full relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[28px] font-[600]">Chat History</h1>
        </div>

        <div className="w-full flex flex-col items-center justify-items-center pt-20">
          <div className="flex flex-col items-center justify-items-center text-center gap-5 lg:w-1/2 w-full">
            <IoChatbubblesOutline className="text-[50px]" />
            <p className="text-[25px] font-[600]">You don’t have any Chat History yet</p>
            <p className="text-[18px]">Start Chat with the Docus AI Health Assistant to save and view your conversation history.</p>
            <Link
              to="/dashboard/chat/choose"
              className="flex items-center gap-3 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md hover:bg-slate-800 transition-all"
            >Start Chat
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChatHistory
