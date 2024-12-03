import { useState } from "react";
import { logo } from "../../constants/images";
import { AiOutlineMail } from "react-icons/ai";
import { LuKeyRound } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleForm = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", inputData);
      toast.success("Account created successfully", {
        position: "top-right",
        autoClose: 1000,
      });
      setTimeout(() => {
        window.location.href = "/auth/signin";
      }, 1000);
    } catch (error) {
      toast.error("Error created account", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#f8f9f9] w-full lg:py-20 md:py-20">
      <div className="bg-white flex flex-col items-center justify-center lg:w-[500px] md:w-[500px] w-full rounded-md lg:py-10 md:py-10 py-20">
        <div className="space-y-5 flex flex-col items-center pb-5">
          <img src={logo} alt="logo" className="w-[130px]" />
          <h1 className="text-[28px] font-[500]">Create your account</h1>
        </div>

        <form
          className="w-full lg:px-16 md:px-10 px-3 space-y-2"
          onSubmit={signupUser}
        >
          {/* <div className="space-y-2">
            <Link
              to=""
              className="flex items-center gap-3 border border-slate-300 p-2 rounded-md font-[500] text-[18px] hover:bg-gray-200"
            >
              <AiFillGoogleCircle className="text-darkBlue text-[30px]" />
              Continue with Google
            </Link>
            <Link
              to=""
              className="flex items-center gap-3 border border-slate-300 p-2 rounded-md font-[500] text-[18px] hover:bg-gray-200"
            >
              <RiFacebookCircleFill className="text-darkBlue text-[30px]" />
              Continue with Facebook
            </Link>
            <Link
              to=""
              className="flex items-center gap-3 border border-slate-300 p-2 rounded-md font-[500] text-[18px] hover:bg-gray-200"
            >
              <FaSquareXTwitter className="text-darkBlue text-[25px]" />
              Continue with X (Twitter)
            </Link>
          </div> */}

          {/* <div className="flex items-center gap-2 py-5">
            <span className="w-full h-[2px] bg-gray-200"></span>
            <p className="text-[14px]">OR</p>
            <span className="w-full h-[2px] bg-gray-200"></span>
            <hr />
          </div> */}

          <div className="flex items-center gap-2 border border-slate-300 p-3 rounded-sm">
            <FaRegUserCircle className="text-[20px] opacity-70" />
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              className="outline-none font-[500] text-[18px]"
              onChange={handleForm}
            />
          </div>
          <p className="text-red hidden">username is required</p>
          <div className="flex items-center gap-2 border border-slate-300 p-3 rounded-sm">
            <AiOutlineMail className="text-[20px] opacity-70" />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="outline-none font-[500] text-[18px]"
              autoComplete="off"
              onChange={handleForm}
            />
          </div>
          <p className="text-red hidden">email is required</p>
          <div className="flex items-center gap-2 border border-slate-300 p-3 rounded-sm">
            <LuKeyRound className="text-[20px] opacity-70" />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="outline-none font-[500] text-[18px]"
              onChange={handleForm}
            />
          </div>
          <p className="text-red hidden">password is required</p>

          <div className="w-full pt-3">
            <button
              type="submit"
              className="bg-darkBlue hover:bg-slate-600 text-[18px] font-[500] text-white w-full rounded-sm py-2"
            >
              Sign up
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-[18px]">
              Already have an account?{" "}
              <Link to="/auth/signin" className="text-darkBlue hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;