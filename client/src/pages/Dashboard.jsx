import {
  personal_ai_doctor,
  top_doctor,
} from "../constants/images";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Dashboard = () => {
  const username = localStorage.getItem("username");
  useEffect(() => {
    toast.success(`Welcome back ${username}`, {
      position: "top-right",
      autoClose: 3000,
    });
  }, [username]);

  return (
    <div className="flex items-center justify-center w-full py-5 bg-[#f8f9f9] pt-[80px] px-3 h-[100vh]">
      <div className="lg:w-3/5 md:w-3/4 w/3/3 space-y-3">
        <div className="w-full h-fit border bg-white border-slate-200 rounded-md hover:shadow-sm">
          <Link
            to="/dashboard/overview"
            className="flex items-center justify-between w-full px-5 py-2"
          >
            <div className="space-y-1">
              <h1 className="text-darkBlue text-[25px] font-[500]">
                {username}
              </h1>
              <p className="text-[16px] opacity-70">Profile</p>
            </div>
            <div className="flex items-center justify-center rounded-full h-10 w-10 border border-slate-400">
              <ImProfile className="text-[30px] rounded-full text-darkBlue" />
            </div>
          </Link>
        </div>

        <div className="w-full h-fit border border-slate-200 rounded-md bg-[#e3eeed] hover:shadow-sm">
          <Link
            to="/dashboard/chat/choose"
            className="flex flex-col gap-3 w-full p-5"
          >
            <h1 className="text-[25px] font-[500]">Your Personal AI Doctor</h1>
            <img src={personal_ai_doctor} alt="image" className="w-[110px]" />
            <div className="flex items-center justify-end gap-2 text-darkBlue pt-5">
              <p className="text-[18px] font-[600]">Chat</p>
              <FaArrowRightLong />
            </div>
          </Link>
        </div>

        {/* <div className="w-full h-fit border border-slate-200 rounded-md bg-white hover:shadow-sm">
          <Link
            to="/dashboard/test-results"
            className="flex items-center justify-between w-full px-5 py-2"
          >
            <div className="space-y-1">
              <h1 className="text-[20px] font-[500]">Lab Tests</h1>
              <p className="text-[16px] opacity-70">
                No tests yet. Add a new test!
              </p>
            </div>
            <img
              src={lab_test_interpretation}
              alt="image"
              className="w-[70px]"
            />
          </Link>
        </div> */}

        <div className="w-full h-fit border border-slate-200 rounded-md bg-white hover:shadow-sm">
          <Link
            to="/dashboard/experts"
            className="flex items-center justify-between w-full px-5 py-2"
          >
            <div className="space-y-1">
              <h1 className="text-[20px] font-[500]">Consult Top Doctors</h1>
              <p className="text-[16px] opacity-70">
                Online Consultation with top Doctors from the Pakistan.
              </p>
            </div>
            <img src={top_doctor} alt="image" className="w-[70px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;