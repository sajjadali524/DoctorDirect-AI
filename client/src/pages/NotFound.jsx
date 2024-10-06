import React from "react";
import { Link } from "react-router-dom";
import { not_found } from "../constants/images";

const NotFound = () => {
  return (
    <div className="w-full lg:h-screen h-auto lg:pt-0 pt-20 lg:px-28 md:px-10 px-3 flex items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <h1 className="text-[50px]">Oops!</h1>
          <h1 className="text-[50px] pb-3">Page Not Found</h1>
          <p className="pb-20">
            This page doesn’t exist or was removed! We <br /> suggest you to go
            back to home.
          </p>
          <Link
            to="/"
            className="bg-darkBlue hover:bg-slate-500 py-3 px-5 rounded-md text-white font-[600] text-18px"
          >
            Go Home
          </Link>
        </div>
        <img src={not_found} alt="image" />
      </div>
    </div>
  );
};

export default NotFound;