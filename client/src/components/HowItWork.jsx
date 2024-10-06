import React from "react";
import { PrimaryButton } from "./Buttons";

const HowItWork = ({ title, desc, button, howitwork = [] }) => {
  return (
    <div className="lg:px-28 md:px-10 px-3 pt-28 flex flex-col items-center">
      <div className="lg:text-center md:text-center text-left space-y-5 pb-10">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
        {howitwork.map((items, index) => {
          return (
            <div
              key={index}
              className="flex items-center rounded-lg border border-slate-400"
            >
              <div className="h-[100%] rounded-s-lg bg-gray-300 w-5"></div>
              <div className="py-5 px-3 space-y-3">
                <h1 className="text-[22px]">{items.title}</h1>
                <p>{items.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-16">
        <PrimaryButton text={button} path="/welcome" />
      </div>
    </div>
  );
};

export default HowItWork;
