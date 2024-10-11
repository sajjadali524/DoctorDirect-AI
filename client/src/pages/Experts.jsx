import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";

const Experts = () => {
  const [isVisible, setIsVisible] = useState(null);
  const [acceptedDoctors, setAcceptedDoctors] = useState([]);
  const [filterDoctors, setFilterDoctors] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const getAcceptedDoctors = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/doctor/accept-doctors"
      );
      setAcceptedDoctors(response.data.acceptedDoctors);
      setFilterDoctors(response.data.acceptedDoctors);
    };
    getAcceptedDoctors();
  }, []);

  useEffect(() => {
    const matchData = () => {
      const filteredDoctors = acceptedDoctors.filter((val) => {
        return val.specialities.toLowerCase().includes(input.toLowerCase());
      });
      setFilterDoctors(filteredDoctors);
    };
    if (input) {
      matchData();
    } else {
      setFilterDoctors(acceptedDoctors);
    }
  }, [input, acceptedDoctors]);

  return (
    <div className="flex lg:justify-center pt-[80px] bg-[#f8f9f9] w-full h-screen px-3">
      <div className="w-3/4 relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="text-[28px] font-[600]">Choose Top Doctor</h1>
        </div>

        <div className="flex items-center justify-between py-2 px-5 border border-slate-200 bg-white lg:w-1/3 w-full rounded-md ml-1 mb-10">
          <input
            type="text"
            placeholder="Enter speciality"
            className="placeholder-slate-300 bg-transparent outline-none"
            onChange={(e) => setInput(e.target.value)}
          />
          <IoSearchOutline />
        </div>

        <div className="grid grid-cols-3 gap-10">
          {!filterDoctors.length > 0 ? (
            <h1 className="text-[25px] font-[500]">Sorry! Not Found</h1>
          ) : (
            filterDoctors.map((doctor, index) => {
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl cursor-pointer hover:border-slate-400"
                  onMouseOver={() => setIsVisible(index)}
                  onMouseOut={() => setIsVisible(null)}
                >
                  <div className="relative w-full">
                    <img
                      src={doctor.profile_photo}
                      alt="image"
                      className="rounded-t-2xl"
                    />
                    <div
                      className={`flex items-center justify-center gap-3 absolute opacity-0 text-center bg-darkBlue bg-opacity-50 w-full py-2 text-white transition-all bottom-0 ${
                        isVisible === index && "opacity-100 bottom-0"
                      }`}
                    >
                      <MdRemoveRedEye className="text-[20px]" />
                      <Link
                        to={`/dashboard/experts/${doctor._id}`}
                        className="font-[500]"
                        id="biography"
                      >
                        View Biography
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col items-center py-5 space-y-2 bg-white rounded-b-2xl">
                    <h1 className="text-[25px] font-[600]">{`${doctor.first_name} ${doctor.last_name}`}</h1>
                    <p className="text-[18px]">{`${doctor.specialities} and ${doctor.subspeciality}`}</p>
                    <p className="text-[18px]">{`${doctor.country}`}</p>
                    <p className="text-[18px]">{`${doctor.experience} years of experience`}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Experts;