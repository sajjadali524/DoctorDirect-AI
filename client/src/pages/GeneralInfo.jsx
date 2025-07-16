import { useState } from "react";
import { logo } from "../constants/images";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GeneralInfo = () => {
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleForm = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://doctordirect-ai.onrender.com/api/user/profile", inputData, {withCredentials: true});
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="flex items-center justify-center bg-[#f8f9f9] w-full lg:py-5 md:py-5 py-0 lg:h-screen md:h-screen h-auto">
      <div className="bg-white flex flex-col lg:w-[700px] md:w-[700px] w-full rounded-xl py-5 px-5">
        <div className="lg:pb-0 md:pb-0 pb-10">
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>

        <div className="flex flex-col items-center text-center space-y-3">
          <p className="text-[18px] pb-10">GENERAL INFORMATION</p>
        </div>

        <form
          className="w-full lg:px-16 md:px-10 px-3 space-y-2"
          onSubmit={submitData}
        >
          <div className="flex flex-col gap-2  rounded-sm">
            <label htmlFor="name" className="text-[18px] font-medium">
              Name
            </label>
            <div className="flex justify-between rounde-sm border border-slate-300 p-3">
              <input
                type="text"
                placeholder="e.g. john"
                name="name"
                className="outline-none font-[500] text-[18px]"
                onChange={handleForm}
              />
              <p className="text-[16px] opacity-70">Name</p>
            </div>
          </div>
          <p className="text-red hidden">username is required</p>

          <div className="flex flex-col gap-2  rounded-sm">
            <label htmlFor="age" className="text-[18px] font-medium">
              Age
            </label>
            <div className="flex justify-between rounde-sm border border-slate-300 p-3">
              <input
                type="text"
                placeholder="e.g. 48"
                name="age"
                className="outline-none font-[500] text-[18px]"
                onChange={handleForm}
              />
              <p className="text-[16px] opacity-70">years</p>
            </div>
          </div>
          <p className="text-red hidden">username is required</p>

          <div className="flex flex-col gap-2  rounded-sm">
            <label htmlFor="age" className="text-[18px] font-medium">
              Weight
            </label>
            <div className="flex justify-between rounde-sm border border-slate-300 p-3">
              <input
                type="text"
                placeholder="e.g. 70"
                name="weight"
                className="outline-none font-[500] text-[18px]"
                onChange={handleForm}
              />
              <p className="text-[16px] opacity-70">kg</p>
            </div>
          </div>
          <p className="text-red hidden">username is required</p>

          <div className="flex flex-col gap-2  rounded-sm">
            <label htmlFor="age" className="text-[18px] font-medium">
              Height
            </label>
            <div className="flex justify-between rounde-sm border border-slate-300 p-3">
              <input
                type="text"
                placeholder="e.g. 173"
                name="height"
                className="outline-none font-[500] text-[18px]"
                onChange={handleForm}
              />
              <p className="text-[16px] opacity-70">cm</p>
            </div>
          </div>
          <p className="text-red hidden">username is required</p>

          <p className="pt-5">Select Gender</p>
          <select
            name="gender"
            onChange={handleForm}
            className="w-full outline-none border border-slate-200 cursor-pointer py-3 text-[18px] font-[500] px-2"
          >
            <option value="" className="text-[18px] font-[500]">
              Select Gender
            </option>
            <option value="male" className="text-[18px] font-[500]">
              Male
            </option>
            <option value="female" className="text-[18px] font-[500]">
              Female
            </option>
            <option value="other" className="text-[18px] font-[500]">
              Other
            </option>
          </select>

          <div className="w-full pt-3">
            <button
              type="submit"
              className="bg-darkBlue hover:bg-slate-600 text-[18px] font-[500] text-white w-full rounded-sm py-2"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralInfo;