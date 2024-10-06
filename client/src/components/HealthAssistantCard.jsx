import React from "react";
import { PrimaryButton } from "./Buttons";

const HealthAssistantCard = ({
  title,
  desc,
  button,
  users = [],
  healthAssistantCard = [],
}) => {
  return (
    <div className="lg:px-28 md:px-10 px-3 pt-28">
      <div className="lg:text-center md:text-center text-left space-y-3">
        <h1 className="lg:text-[40px] md:text-[36px] text-[28px]">{title}</h1>
        <p>{desc}</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 pt-10">
        {healthAssistantCard.map((items, index) => {
          return (
            <div
              key={index}
              className="bg-[#e9f3f2] p-5 space-y-3 pb-5 rounded-md border border-slate-300"
            >
              {items.image && (
                <items.image className="text-darkBlue text-[30px]" />
              )}

              {items.text && (
                <h1 className="text-darkBlue text-[30px]">{items.text}</h1>
              )}

              <h1 className="text-[20px] font-[700">{items.title}</h1>
              <p className="leading-[25px] opacity-70">{items.detail}</p>
            </div>
          );
        })}
      </div>
      {button && (
        <div className="flex justify-center mt-10">
          <PrimaryButton text={button} path="/welcome" />
        </div>
      )}
      {users && (
        <div className="pt-10 flex items-center justify-center lg:gap-16 md:gap-10 gap-5">
          {users.map((user, i) => {
            return (
              <div key={i} className="flex flex-col gap-3 items-center">
                <div className="flex items-center justify-center gap-2 text-darkBlue">
                  {user.image && (
                    <user.image className="text-darkBlue text-[30px]" />
                  )}
                  <h1 className="text-[35px]">{user.title}</h1>
                </div>
                <p className="text-[18px]">{user.detail}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HealthAssistantCard;
