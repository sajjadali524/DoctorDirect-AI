import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { toast } from "react-toastify";

const Doctors = () => {
  const [doctor, setDoctor] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `https://doctordirect-ai.onrender.com/api/doctor/${id}`,
          { withCredentials: true }
        );
        setDoctor(response.data.doctor);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor();
  });

  const bookAppointment = async () => {
    try {
      await axios.post(
        `https://doctordirect-ai.onrender.com/api/appointment/book/${id}`,
        {},
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Appointment booked! please check your email", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full pb-24">
      <div className="flex items-center justify-center fixed bottom-0 left-0 bg-lightBlue border border-t-slate-400 z-50 bg-opacity-50 w-full py-5">
        <button
          className="bg-darkBlue px-7 py-3 text-white rounded-md cursor-pointer font-[500] hover:bg-slate-500"
          onClick={bookAppointment}
        >
          Book an Appointment
        </button>
      </div>
      <div className="w-full px-3 relative">
        <div className="flex items-center gap-3 pb-10">
          <button onClick={() => window.history.back()}>
            <FaArrowLeftLong className="hover:text-darkBlue" />
          </button>
          <h1 className="lg:text-[28px] md:text-[23px] text-[18px] font-[600]">{`Doctor's Biography`}</h1>
        </div>

        <div className="space-y-10">
          <div className="flex gap-5 p-5 bg-white border border-slate-300 rounded-lg">
            <div className="w-1/3">
              <img
                src={doctor.profile_photo}
                alt="image"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <h1 className="text-[25px] font-[600]">{`Dr. ${doctor.first_name} ${doctor.last_name}`}</h1>
              <p>{`${doctor.specialities}`}</p>
              <p>{`${doctor.country}`}</p>
              <p>{`${doctor.experience} years of experience`}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-7 px-5 py-5 bg-white border border-slate-300 rounded-lg">
            <div className="flex items-center gap-3">
              <BiSolidMessageSquareAdd className="text-darkBlue text-[30px]" />
              <h1 className="text-[20px] font-[600]">Area of expertise</h1>
            </div>
            <div className="space-y-2">
              <h1 className="text-[20px] font-[500]">Speciality</h1>
              <p className="text-[18px]">{`${doctor.specialities}`}</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-[20px] font-[500]">Sub Speciality</h1>
              <p className="text-[18px]">{`${doctor.subspeciality}`}</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-[20px] font-[500]">Diseases</h1>
              <p className="text-[18px]">{`${doctor.procedures_performed}`}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-7 px-5 py-5 bg-white border border-slate-300 rounded-lg">
            <div className="flex items-center gap-3">
              <BiSolidMessageSquareAdd className="text-darkBlue text-[30px]" />
              <h1 className="text-[20px] font-[600]">Biography</h1>
            </div>
            <div>
              <p>{`${doctor.biography}`}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-7 px-5 py-5 bg-white border border-slate-300 rounded-lg">
            <div className="flex items-center gap-3">
              <BiSolidMessageSquareAdd className="text-darkBlue text-[30px]" />
              <h1 className="text-[20px] font-[600]">Publications</h1>
            </div>
            <div>
              <p>
                <li>{`Dr. ${doctor.first_name} ${doctor.last_name} has ${doctor.publication} publications`}</li>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-7 px-5 py-5 bg-white border border-slate-300 rounded-lg">
            <div className="flex items-center gap-3">
              <BiSolidMessageSquareAdd className="text-darkBlue text-[30px]" />
              <h1 className="text-[20px] font-[600]">Details</h1>
            </div>
            <div className="space-y-3">
              <p>
                <li>
                  {`Dr. ${doctor.first_name} ${doctor.last_name}`}{" "}
                  <a
                    href={doctor.cv}
                    download="Doctor_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV
                  </a>
                </li>
              </p>
              <p>
                <li>
                  {`Dr. ${doctor.first_name} ${doctor.last_name}`}{" "}
                  <a
                    href={doctor.document}
                    download="Doctor_Document.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Degree
                  </a>
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Doctors;