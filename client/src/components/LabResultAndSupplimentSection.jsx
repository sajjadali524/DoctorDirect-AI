import React from "react";
import { Link } from "react-router-dom";

const LabResultAndSupplimentSection = ({ labAndSupplement = [] }) => {
  return (
    <div className=" bg-[#f5f5f5] mt-28">
      {labAndSupplement.map((items, index) => {
        return (
          <div
            key={index}
            className="lg:px-28 md:px-10 px-3 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center pt-10 gap-10 lg:pb-0 pb-10"
          >
            <div className="space-y-7 lg:pr-20 pr-0">
              <h1>{items.title}</h1>
              <p>{items.detail}</p>
              <div className="pt-5">
                <Link
                  to={items.path}
                  className="bg-[#e95d53] hover:bg-rose-700 transition-all px-7 py-3 rounded-md font-[600] text-[20px] text-white"
                >
                  {items.button}
                </Link>
              </div>
            </div>
            <div>{items.image && <img src={items.image} alt="image" />}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LabResultAndSupplimentSection;
