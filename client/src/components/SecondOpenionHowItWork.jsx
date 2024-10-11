import React, { useState } from "react";
import { doctor_main } from "../constants/images";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SecondOpenionHowItWork = ({ secondOpenionHowItWork = [] }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(null);

  const handleAnswer = (index) => {
    setIsAnswerVisible((prev) => (prev === index ? null : index));
  };
  return (
    <div className="lg:px-20 md:px-10 px-3 mt-28">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 bg-[#f5f5f5] border border-slate-200 rounded-md py-20 lg:px-16 md:px-8 px-1">
        <div className="lg:space-y-10 md:space-y-7 spce-y-3">
          <h1>How it works</h1>
          <div>
            {secondOpenionHowItWork.map((items, index) => {
              return (
                <div key={index} className="py-3 transition-all">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleAnswer(index)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 font-[600] text-white text-[16px] rounded-full flex items-center justify-center bg-darkBlue">
                        {items.number}
                      </span>
                      <h1 className="lg:text-[22px] md:text-[22px] text-[18px] font-[600]">
                        {items.title}
                      </h1>
                    </div>
                    <MdArrowRight
                      className={`text-[28px] transition-all ${
                        isAnswerVisible === index &&
                        "transform rotate-90 transition-all"
                      }`}
                    />
                  </div>
                  {isAnswerVisible === index && (
                    <p className="transition-all py-3">{items.detail}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-10">
            <Link
              to="/auth/signin"
              className="text-center bg-darkBlue font-[600] text-[18px] px-7 py-3 rounded-md hover:bg-slate-800 transition-all text-white"
            >
              Find Doctor
            </Link>
          </div>
        </div>

        <div className="w-[90%]">
          <img src={doctor_main} alt="doctor_image" />
        </div>
      </div>
    </div>
  );
};

export default SecondOpenionHowItWork;