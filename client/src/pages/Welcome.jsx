import React from "react";
import { logo, chat_bot } from "../constants/images";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center bg-[#f8f9f9] w-full lg:py-5 md:py-5 py-0 lg:h-screen md:h-screen h-auto">
      <div className="bg-white flex flex-col lg:w-[700px] md:w-[700px] w-full rounded-xl py-5 px-5">
        <div className="lg:pb-0 md:pb-0 pb-10">
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>

        <div className="flex flex-col items-center text-center space-y-3">
          <h1 className="font-[600] text-[32px]">Welcome to DocAI</h1>
          <p className="text-[18px] pb-10">your personal health companion</p>
          <img src={chat_bot} alt="image" className="w-[200px] pb-5" />
          <p className="text-[18px] lg:pb-24 md:pb-24 pb-10">
            We’re going to ask you some health related questions to personalize
            your health journey for your unique needs.
          </p>
          <div className="flex items-center gap-2 pb-5">
            <MdLock className="text-darkBlue text-[20px]" />
            <p className="text-[14px] font-[600] lg:text-center md:text-center text-left">
              Privacy Note: Your data is confidential and secured by HIPAA and
              GDPR standards.
            </p>
          </div>
          <Link
            to="/welcome/general-info"
            className="bg-darkBlue text-white hover:bg-slate-600 font-[600] text-[18px] px-7 py-3 rounded-md"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;