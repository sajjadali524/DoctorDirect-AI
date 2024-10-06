import React from "react";
import { RxCheck } from "react-icons/rx";
import { PrimaryButton } from "./Buttons";
import { Link } from "react-router-dom";

const LifeChangingJourney = () => {
  return (
    <div className="pt-28">
      <div className="flex flex-col items-center justify-center bg-[#272a3d] py-20 text-center gap-8 text-white">
        <h1 className="lg:text-[40px] md:text-[28px] text-[20px] lg:leading-[55px] md:leading-[40px] leading-[30px]">
          You’re only one click away <br /> from a life-changing journey
        </h1>
        <Link
          to="/welcome"
          className="bg-[#e95d53] hover:bg-rose-700 transition-all px-7 py-2 rounded-md font-[600] text-[20px]"
        >
          Try AI for Free
        </Link>
        <div className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-10 md:gap-10 gap-5">
          <div className="flex items-center gap-1">
            <RxCheck />
            <p className="text-[14px] font-[400]">
              350+ world-renowned Doctors
            </p>
          </div>
          <div className="flex items-center gap-1">
            <RxCheck />
            <p className="text-[14px] font-[400]">
              Virtual health assistant powered by AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeChangingJourney;