import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Doctors = () => {
    const [doctor, setDoctor] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchDoctor = async () => {
            const response = await axios.get(`http://localhost:8000/api/doctor/${id}`);
            setDoctor(response.data.doctor)
        }
        fetchDoctor()
    });
    return (
        <div className="flex justify-center pt-[80px] bg-[#f8f9f9] w-full pb-24">
            <div className="flex items-center justify-center fixed bottom-0 left-0 bg-lightBlue border border-t-slate-400 z-50 bg-opacity-50 w-full py-5">
                <button className="bg-darkBlue px-7 py-3 text-white rounded-md cursor-pointer font-[500] hover:bg-slate-500">Book an Appointment</button>
            </div>
        <div className="w-3/4 relative">
          <div className="flex items-center gap-3 pb-10">
            <button onClick={() => window.history.back()}>
              <FaArrowLeftLong className="hover:text-darkBlue" />
            </button>
            <h1 className="text-[28px] font-[600]">{`Doctor's Biography`}</h1>
          </div>

          <div className="space-y-10">
          <div className="flex gap-20 p-5 bg-white border border-slate-300 rounded-lg">
            <div className="w-1/3">
                <img src={doctor.profile_photo} alt="image" className="rounded-lg" />
            </div>
            <div className="space-y-3">
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
              <h1 className="text-[20px] font-[500]">Speciality</h1>
              <p className="text-[18px]">Biology</p>
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
              <p><li>{`Dr. ${doctor.first_name} ${doctor.last_name} has 44 publications`}</li></p>
            </div>
          </div>

          <div className="flex flex-col space-y-7 px-5 py-5 bg-white border border-slate-300 rounded-lg">
            <div className="flex items-center gap-3">
                <BiSolidMessageSquareAdd className="text-darkBlue text-[30px]" />
                <h1 className="text-[20px] font-[600]">Details</h1>
            </div>
            <div className="space-y-3">
              <p><li>{`Dr. ${doctor.first_name} ${doctor.last_name}`} <Link to={`${doctor.cv}`}>CV</Link></li></p>
              <p><li>{`Dr. ${doctor.first_name} ${doctor.last_name}`} <Link to={`${doctor.document}`}>Degree</Link></li></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}
export default Doctors;