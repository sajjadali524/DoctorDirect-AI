import { IoHomeSharp } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const DashboardHeader = () => {
  
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
    <div className="flex fixed top-0 left-0 items-center justify-between w-full py-3 bg-[#f8f9f9] border-b-2 px-10 z-50">
      <Link
        to="/dashboard"
        className="flex items-center gap-3 text-[20px] font-[500] hover:text-darkBlue"
      >
        <IoHomeSharp className="text-darkBlue hover:text-white bg-[#e5e7eb] hover:bg-darkBlue rounded-full p-2 text-[35px]" />
        My Dashboard
      </Link>
      <div className="flex items-center gap-5">
        <MdNotifications className="text-[25px] cursor-pointer" />
        <FaUserCircle
          className="text-[25px] cursor-pointer"
          onClick={logoutUser}
        />
      </div>
    </div>
  );
};

export default DashboardHeader;