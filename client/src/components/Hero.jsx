import React from "react";
import { PrimaryButton } from "./Buttons";
import { hipaa, gdpr } from "../constants/images";
import { RxCheck } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Hero = ({ hero = [] }) => {
  const location = useLocation();
  return (
    <div>
      {hero.map((items, index) => {
        const {
          title,
          detail,
          image,
          specialWord,
          position,
          button,
          path,
          tasks,
        } = items;
        const renderTitle = () => {
          if (position === "start") {
            return (
              <h1 className="leading-[62px] lg:text-[55px] md:text-[48px] text-[40px]">
                <span className="text-darkBlue">{specialWord}</span>
                {title}
              </h1>
            );
          }
          if (position === "end") {
            return (
              <h1 className="leading-[62px] lg:text-[55px] md:text-[48px] text-[40px]">
                {title}
                <br />
                <span className="text-darkBlue">{specialWord}</span>
              </h1>
            );
          }
        };

        return (
          <div key={index}>
            <div
              className={`lg:px-28 md:px-10 px-3 lg:pt-[212px] md:pt-[190px] pt-[150px] ${
                location.pathname === "/supplement" && "bg-whiteSmoke"
              } `}
            >
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center">
                <div className="flex flex-col gap-7 lg:pr-24 pr-0">
                  {renderTitle()}
                  <p className="leading-[28px]">{detail}</p>
                  <ul className="space-y-2">
                    {tasks &&
                      tasks.map((task, i) => {
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <RxCheck className="text-[20px] text-darkBlue" />
                            <p>{task}</p>
                          </div>
                        );
                      })}
                  </ul>
                  <div className="">
                    <PrimaryButton text={button} path={path} />
                  </div>
                </div>
                <div className="lg:w-[110%] md:w-[100%] w-[70%] lg:mr-10 lg:mt-0 md:mt-0 mt-10">
                  {image && (
                    <img src={image} alt="image" className="w-[100%]" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center pt-16 gap-3 bg-white px-3">
              <p className="text-[14px]">
                <span className="font-bold">Please Note! </span>Your data is
                confidential and secured by HIPAA and GDPR standards.
              </p>
              <div className="flex items-center gap-10">
                <img
                  src={hipaa}
                  alt="brand-image"
                  className="w-[60px] h-[40px]"
                />
                <img
                  src={gdpr}
                  alt="brand-image"
                  className="w-[60px] h-[60px]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;