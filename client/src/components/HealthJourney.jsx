import React from "react";
import { PrimaryButton } from "./Buttons";

const HealthJourney = ({ title, healthJourney = [] }) => {
  return (
    <div className="lg:px-28 md:px-10 px-3 pt-28 space-y-16">
      <div className="lg:px-3 md:px-3 px-0 lg:text-center md:text-center text-left">
        <h1>{title}</h1>
      </div>

      <div className="lg:px-10 md:px-10 px-0 lg:space-y-[150px] md:space-y-[130px] space-y-[50px]">
        {healthJourney.map((items, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="grid lg:grid-cols-2 md:grid-cols-1 items-center lg:gap-0 gap-10"
            >
              <div
                className={`pt-3 order-2 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-3">
                  <h1 className="lg:text-[30px] md:text-[30px] text-[22px]">
                    {items.title}
                  </h1>
                  <p className="opacity-85">{items.detail}</p>
                  {items.subItems &&
                    items.subItems.map((subItem, subIndex) => {
                      return (
                        <div key={subIndex} className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-darkBlue"></div>
                            <h1 className="lg:text-[22px] md:text-[22px] text-[17px]">
                              {subItem.subTitle}
                            </h1>
                          </div>
                          <p className="opacity-85">{subItem.subDetail}</p>
                        </div>
                      );
                    })}
                </div>
                <div className="pt-10">
                  <PrimaryButton text={items.button} pat={items.path} />
                </div>
              </div>

              <div
                className={`flex order-1 ${
                  isEven
                    ? "lg:order-2 lg:justify-end justify-center"
                    : "lg:justify-start justify-center lg:order-1"
                }`}
              >
                {items.image && (
                  <img src={items.image} alt="image" className="w-[85%]" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthJourney;