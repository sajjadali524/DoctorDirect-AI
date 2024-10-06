import React from "react";
import { usa_today, entrepreneur, cnbc, forbes } from "../constants/images";

const CompanyLogoSection = () => {
  return (
    <div className="flex items-center justify-center lg:gap-20 md:gap-10 gap-5 pt-28">
      <img
        src={forbes}
        alt="brand-image"
        className="lg:w-[120px] md:w-[80px] w-[50px]"
      />
      <img
        src={usa_today}
        alt="brand-image"
        className="lg:w-[120px] md:w-[80px] w-[50px]"
      />
      <img
        src={entrepreneur}
        alt="brand-image"
        className="lg:w-[150px] md:w-[80px] w-[50px]"
      />
      <img
        src={cnbc}
        alt="brand-image"
        className="lg:w-[80px] md:w-[80px] w-[50px]"
      />
    </div>
  );
};

export default CompanyLogoSection;