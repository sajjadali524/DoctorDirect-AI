import { FaArrowLeftLong } from "react-icons/fa6";
import { LiaEdit } from "react-icons/lia";
import { user_profile } from "../constants/images";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const Overview = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [userField, setUserField] = useState("");
  const [userFieldName, setUserFieldName] = useState("");
  const [userFieldCategory, setUserFieldCategory] = useState("");

  useEffect(() => {
    const gettingUserProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/overview",
          { withCredentials: true }
        );
        setUserProfile(response.data.profile);
      } catch (error) {
        console.log(error);
      }
    };
    gettingUserProfile();
  }, []);

  const updateField = (profile, name, category) => {
    setIsOpen(true);
    setUserField(profile);
    setUserFieldName(name);
    setUserFieldCategory(category);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setIsOpen(false);
      const response = await axios.put(
        "http://localhost:8000/api/user/overview/update",
        { userFieldCategory, userField },
        { withCredentials: true }
      );
      setUserProfile(response.data.updateProfile);
      toast.success(`${userFieldCategory} is Updated`, {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-center pt-[80px] bg-[#f8f9f9] w-full lg:h-screen md:h-screen pb-10 px-3 ${
          isOpen && "opacity-10"
        }`}
      >
        <div className="lg:w-3/4 w-full">
          <div className="flex items-center gap-3 pb-10">
            <button onClick={() => window.history.back()}>
              <FaArrowLeftLong className="hover:text-darkBlue" />
            </button>
            <h1 className="text-[28px] font-[500]">{`${userProfile.name} Profile`}</h1>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-10">
            <h1 className="text-left text-[20px] font-[600] pb-10">
              GENERAL INFORMATION
            </h1>
            <div className="lg:flex md:flex block items-center justify-center">
              <div className="space-y-3 w-full">
                <div className="flex flex-col items-end justify-end bg-[#f8f9f9] rounded-md border border-slate-200 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <p className="text-[16px]">{userProfile.name}</p>
                    <LiaEdit
                      className="text-[18px] cursor-pointer hover:text-darkBlue"
                      onClick={() =>
                        updateField(userProfile.name, "name", "Name")
                      }
                    />
                  </div>
                  <p className="text-right text-[14px] font-[600] opacity-70">
                    Name
                  </p>
                </div>
                <div className="flex flex-col items-end justify-end bg-[#f8f9f9] rounded-md border border-slate-200 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <p className="text-[16px]">{`${userProfile.age} years`}</p>
                    <LiaEdit
                      className="text-[18px] cursor-pointer hover:text-darkBlue"
                      onClick={() =>
                        updateField(userProfile.age, "years", "Age")
                      }
                    />
                  </div>
                  <p className="text-right text-[14px] font-[600] opacity-70">
                    Age
                  </p>
                </div>
                <div className="flex flex-col items-end justify-end bg-[#f8f9f9] rounded-md border border-slate-200 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <p className="text-[16px]">{`${userProfile.height} cm`}</p>
                    <LiaEdit
                      className="text-[18px] cursor-pointer hover:text-darkBlue"
                      onClick={() =>
                        updateField(userProfile.height, "cm", "Height")
                      }
                    />
                  </div>
                  <p className="text-right text-[14px] font-[600] opacity-70">
                    Height
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={user_profile}
                  alt="user_profile"
                  className="lg:w-[300px] md:w-[300px] w-[200px]"
                />
              </div>

              <div className="space-y-3 w-full">
                <div className="flex flex-col bg-[#f8f9f9] rounded-md border border-slate-200 px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[16px]">{`${userProfile.weight} kg`}</p>
                    <LiaEdit
                      className="text-[18px] cursor-pointer hover:text-darkBlue"
                      onClick={() =>
                        updateField(userProfile.weight, "kg", "Weight")
                      }
                    />
                  </div>
                  <p className="text-left text-[14px] font-[600] opacity-70">
                    Weight
                  </p>
                </div>
                <div className="flex flex-col bg-[#f8f9f9] rounded-md border border-slate-200 px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[16px]">{userProfile.gender}</p>
                    <LiaEdit
                      className="text-[18px] cursor-pointer hover:text-darkBlue"
                      onClick={() =>
                        updateField(userProfile.gender, "", "Gender")
                      }
                    />
                  </div>
                  <p className="text-left text-[14px] font-[600] opacity-70">
                    Gender
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <form
          onSubmit={submitForm}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-whiteSmoke w-1/3 transition-all rounded-md shadow-xl"
        >
          <div className="w-full p-5 space-y-5">
            <div className="flex items-center justify-between">
              <p>{`Edit ${userFieldCategory}`}</p>
              <IoIosClose
                className="text-[30px] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <p>{`Please enter your actual ${userFieldCategory}.`}</p>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">{`${userFieldCategory}`}</label>
              <div className="flex items-center justify-between border border-slate-200 pr-3 rounded-md">
                <input
                  type="text"
                  value={userField}
                  className="w-full px-3 py-2 bg-transparent outline-none"
                  onChange={(e) => setUserField(e.target.value)}
                />
                <p className="opacity-50 text-[18px]">{`${userFieldName}`}</p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-darkBlue px-10 py-1 rounded-sm text-white w-full"
            >
              Done
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Overview;