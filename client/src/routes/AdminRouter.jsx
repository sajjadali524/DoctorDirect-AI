import Sidebar from "../pages/admin/Sidebar";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import Router from "./Router";
import { Link } from "react-router-dom";

const AdminRouter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const logoutAdmin = (e) => {
    e.preventDefault();
    try {
      axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      window.localStorage.removeItem("admin");
      window.location.href = "/auth/signin";
    } catch (error) {
      console.log(error);
    }
  };

  const isAdmin = window.localStorage.getItem("admin");

  return (
    <div className="fixed top-0 flex justify-between w-full">
      {isAdmin && (
        <div className="w-[250px]">
          <Sidebar />
        </div>
      )}

      <div className="w-full">
        {isAdmin && (
          <div className="flex items-center justify-between py-3 bg-[#f8f9f9] border-b-2 px-5 z-50">
            <Link to="/admin-dashboard">
              <IoHomeSharp className="text-darkBlue hover:text-white bg-[#e5e7eb] hover:bg-darkBlue rounded-full p-2 text-[35px]" />
            </Link>
            <div className="flex items-center gap-5">
              <FaUserCircle
                className="text-[25px] cursor-pointer"
                onClick={() => setIsVisible(!isVisible)}
              />
            </div>
            {isVisible && (
              <div
                onMouseLeave={() => setIsVisible(false)}
                className={`absolute top-16 right-2 bg-white py-3 shadow-lg transition-all`}
              >
                <button
                  onClick={logoutAdmin}
                  className="font-[400] text-[20px] hover:bg-darkBlue px-10 hover:text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        <Router />
      </div>
    </div>
  );
};

export default AdminRouter;