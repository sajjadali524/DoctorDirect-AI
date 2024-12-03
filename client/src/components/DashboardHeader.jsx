import { IoHomeSharp } from "react-icons/io5";
// import { MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const DashboardHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const logoutUser = (e) => {
    e.preventDefault();
    try {
      axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("username");
      window.location.href = "/auth/signin";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex fixed top-0 left-0 items-center justify-between w-full py-3 bg-[#f8f9f9] border-b-2 px-5 z-50">
      <Link
        to="/dashboard"
        className="flex items-center gap-3 text-[20px] font-[500] hover:text-darkBlue"
      >
        <IoHomeSharp className="text-darkBlue hover:text-white bg-[#e5e7eb] hover:bg-darkBlue rounded-full p-2 text-[35px]" />
        My Dashboard
      </Link>
      <div className="flex items-center gap-5">
        {/* <MdNotifications className="text-[25px] cursor-pointer" /> */}
        <FaUserCircle
          className="text-[25px] cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
      <div
        onMouseLeave={() => setIsVisible(false)}
        className={`flex flex-col space-y-3 absolute top-16 -right-40 bg-white py-3 shadow-lg transition-all ${
          isVisible && "right-1"
        }`}
      >
        <Link to="/dashboard/overview" className="font-[500] text-[20px] hover:bg-darkBlue px-10 hover:text-white" onClick={() => setIsVisible(false)}>
          Profile
        </Link>
        <button onClick={logoutUser} className="font-[400] text-[20px] hover:bg-darkBlue px-10 hover:text-white">
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;