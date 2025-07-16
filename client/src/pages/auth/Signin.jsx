import { useState } from "react";
import { logo } from "../../constants/images";
import { AiOutlineMail } from "react-icons/ai";
import { LuKeyRound } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const Signin = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleForm = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const signinUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://doctordirect-ai.onrender.com/api/auth/login",
        inputData,
        { withCredentials: true }
      );
      if(response.data.user.role === "admin") {
        window.localStorage.setItem("admin", response.data.token);
        window.location.href= "/admin-dashboard";
      }else {

        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("username", response.data.user.username);
        if (response.data.user.isProfileCompletd === true) {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/welcome";
        }
      }
    } catch (error) {
      toast.error("Incorrect email & password", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("error found:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#f8f9f9] w-full lg:py-20 md:py-20">
      <div className="bg-white flex flex-col items-center justify-center lg:w-[500px] md:w-[500px] w-full rounded-md lg:py-10 md:py-10 py-20">
        <div className="space-y-5 flex flex-col items-center pb-5">
          <img src={logo} alt="logo" className="w-[130px]" />
          <h1 className="text-[28px] font-[500]">Welcome Back</h1>
        </div>

        <form
          className="w-full lg:px-16 md:px-10 px-3 space-y-2"
          onSubmit={signinUser}
        >
          <div className="flex items-center gap-2 border border-slate-300 p-3 rounded-sm">
            <AiOutlineMail className="text-[20px] opacity-70" />
            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              name="password"
              className="outline-none font-[500] text-[18px]"
              onChange={handleForm}
            />
          </div>
          <p className="text-red hidden">password is required</p>
          <div className="flex justify-end">
            <Link
              to="/auth/forgot-password"
              className="text-darkBlue text-[18px] hover:underline font-[500]"
            >
              Forgot password?
            </Link>
          </div>

          <div className="w-full pt-3">
            <button
              type="submit"
              className="bg-darkBlue hover:bg-slate-600 text-[18px] font-[500] text-white w-full rounded-sm py-2"
            >
              Sign in
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-[18px]">
              {`Don't have an account?`}
              <Link to="/auth/signup" className="text-darkBlue hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* <div className="flex items-center gap-2 pt-3">
            <span className="w-full h-[2px] bg-gray-200"></span>
            <p className="text-[14px]">OR</p>
            <span className="w-full h-[2px] bg-gray-200"></span>
          </div> */}

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
        </form>
      </div>
    </div>
  );
};

export default Signin;