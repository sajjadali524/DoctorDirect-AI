import React from "react";
import { smartHealth } from "../constants/allData";
import { RxCheck } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { usa_today, entrepreneur, cnbc, forbes } from "../constants/images";

const SmartHealth = () => {
  return (
    <div className="lg:px-28 md:px-10 px-3 space-y-10 pt-28">
      <div className="text-center space-y-3">
        <h1 className="text-[40px]">Make Informed Health Decisions</h1>
        <p>
          We have all you need to better understand your health and make
          informed and accurate decisions about your well-being.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:gris-cols-2 grid-cols-1 gap-5 pb-16">
        {smartHealth.map((items, index) => {
          return (
            <div
              key={index}
              className={`${
                index === 0 ? "row-span-3 p-10 pt-16" : "px-3 py-10"
              } bg-whiteSmoke rounded-lg`}
            >
              <div
                className={`flex space-y-1 gap-5 ${
                  index === 0 && "flex flex-col space-y-5"
                }`}
              >
                <div
                  className={`${
                    index === 0 ? "w-[104px]" : "w-[160px]"
                  }`}
                >
                  {items.image && (
                    <img
                      src={items.image}
                      alt={items.title}
                      className="w-[100%]"
                    />
                  )}
                </div>
                <div className={`${index === 0 && "flex flex-col gap-5"}`}>
                  <h1
                    className={`${
                      index === 0 && "text-[27px]"
                    } text-[18px] font-[700]`}
                  >
                    {items.title}
                  </h1>
                  <p className={`${index !== 0 && "text-[16px]"}`}>
                    {items.detail}
                  </p>
                </div>
                <div className="space-y-2">
                  {items.tasks &&
                    items.tasks.map((task, i) => {
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <RxCheck className="text-[20px] text-darkBlue" />
                          <p>{task}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div
                className={`flex items-center justify-end gap-3 text-darkBlue font-[600] ${
                  index === 0 ? "mt-10" : "mt-5"
                }`}
              >
                <Link to={items.path}>{items.button}</Link>
                <FaArrowRight />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center lg:gap-20 md:gap-10 gap-5">
        <img src={forbes} alt="brand-image" className="lg:w-[120px] md:w-[80px] w-[50px]" />
        <img src={usa_today} alt="brand-image" className="lg:w-[120px] md:w-[80px] w-[50px]" />
        <img src={entrepreneur} alt="brand-image" className="lg:w-[150px] md:w-[80px] w-[50px]" />
        <img src={cnbc} alt="brand-image" className="lg:w-[80px] md:w-[80px] w-[50px]" />
      </div>
    </div>
  );
};

export default SmartHealth;