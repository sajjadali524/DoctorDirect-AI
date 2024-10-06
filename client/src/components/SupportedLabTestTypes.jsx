import React from "react";

const SupportedLabTestTypes = ({ supportedLabTestCard = [] }) => {
  return (
    <div className="lg:px-28 md:px-10 px-3 pt-28 space-y-10">
      <div className="lg:text-center md:text-center text-left space-y-5">
        <h1>Supported Lab Test Types</h1>
        <p>
          Explore the variety of lab test types we support and analyze to help
          you make informed decisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {supportedLabTestCard.map((items, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-3 p-5 bg-[#f5f5f5] rounded-lg"
            >
              {items.image && (
                <img src={items.image} alt="image" className="w-[50px]" />
              )}
              <div className="space-y-1">
                <h1 className="text-[20px]">{items.title}</h1>
                <p className="text-[16px]">{items.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportedLabTestTypes;
