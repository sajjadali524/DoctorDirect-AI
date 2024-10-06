import React, { useState } from "react";
import { logo } from "../../constants/images";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {
  const [inputData, setInputData] = useState("")
  const [error, setError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if(!inputData) {
        setError(true)
    }
    console.log(inputData);
  };

  return (
    <div className="flex items-center justify-center bg-[#f8f9f9] w-full h-screen lg:py-20 md:py-20">
      <div className="bg-white flex flex-col items-center justify-center lg:w-[500px] md:w-[500px] w-full rounded-md lg:py-10 md:py-10 py-20 lg:px-16 md:px-10 px-3">

        <div className="space-y-5 flex flex-col items-center pb-5 w-full">
          <img src={logo} alt="logo" className="w-[130px]" />
          <div className="flex items-center gap-10 w-full">
            <Link to="/auth/signin"><FaArrowLeftLong className="text-darkBlue text-left text-[20px]" /></Link>
           <h1 className="text-[32px] font-[500] text-center">Forgot password?</h1>
          </div>
          <p className="text-center pb-3 text-[16px]">Please, enter your email and we will send you a link to reset a password.</p>
        </div>

        <form
          className="w-full space-y-2"
          onSubmit={submitForm}
        >
          <div className="flex items-center gap-2 border border-slate-300 p-3 rounded-sm">
            <AiOutlineMail className="text-[20px] opacity-70" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="outline-none font-[500] text-[18px]"
              autoComplete="off"
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
          {error && <p className="text-red-400 text-[13px]">email is required</p>}

          <div className="w-full pt-3">
            <button
              type="submit"
              className="bg-darkBlue hover:bg-slate-600 text-[18px] font-[500] text-white w-full rounded-sm py-2"
            >
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;