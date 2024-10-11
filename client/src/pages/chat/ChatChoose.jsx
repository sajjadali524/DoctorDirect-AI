import { Link } from "react-router-dom";
import { personal_ai_doctor } from "../../constants/images";
import { HiPlus } from "react-icons/hi";
import { PiCardsThreeFill } from "react-icons/pi";

const AIchat = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="flex flex-col items-center pt-[210px] px-3 pb-20">
      <div className="flex items-center justify-center  w-28 h-28 bg-lightBlue rounded-full">
        <img src={personal_ai_doctor} alt="img" className="w-20 h-20" />
      </div>

      <h1 className="font-[600] text-[28px]">{`${username} AI Doctor`}</h1>
      <p>
        Your AI Doctor is personalized using the health details you provided.
      </p>
      <Link
        to="/dashboard/chat/personal"
        className="flex items-center gap-3 bg-darkBlue py-3 px-5 text-white font-[600] text-[18px] rounded-md mt-5 hover:bg-slate-800 transition-all"
      >
        <HiPlus /> Start New Chat
      </Link>

      <div className="flex items-center gap-5 pt-16">
        <Link
          to="/dashboard/chat-history"
          className="flex items-center gap-3 border border-darkBlue py-3 px-5 text-midnightBlue font-[600] text-[16px] rounded-md mt-5 hover:bg-lightBlue transition-all"
        >
          <PiCardsThreeFill className="text-[20px] text-darkBlue" /> Chat
          History
        </Link>
        <Link
          to="/dashboard/chat/personal"
          className="flex items-center gap-3 border border-darkBlue py-3 px-5 text-midnightBlue font-[600] text-[16px] rounded-md mt-5 hover:bg-lightBlue transition-all"
        >
          <PiCardsThreeFill className="text-[20px] text-darkBlue" /> Last Chat
        </Link>
      </div>
    </div>
  );
};

export default AIchat;