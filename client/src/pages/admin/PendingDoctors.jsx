import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from "react-toastify";

const PendingDoctors = () => {
  const [pendingDoctors, setPendingDoctors] = useState([]);
  var doctorDisplayId = 1;

  useEffect(() => {
    const fetchPendingDoctors = async () => {
      try {
        const response = await axios.get(
          "https://doctordirect-ai.onrender.com/api/admin/pending-doctors",
          { withCredentials: true }
        );
        setPendingDoctors(response.data.pendingDoctors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPendingDoctors();
  }, [pendingDoctors]);

  const rejectDoctor = async (doctorId) => {
    try {
      await axios.put(
        `https://doctordirect-ai.onrender.com/api/admin/reject-doctor/${doctorId}`,
        { withCredentials: true }
      );
      setPendingDoctors(pendingDoctors.filter((doctor) => doctor.id !== doctorId));
      toast.success("Doctor Rejected", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };


  const acceptDoctor = async (doctorId) => {
    try {
        await axios.put(`https://doctordirect-ai.onrender.com/api/admin/accept-doctor/${doctorId}`, {withCredentials: true});
        setPendingDoctors(pendingDoctors.filter((doctor) => doctor.id !== doctorId))
        toast.success("Doctor Accepted", {
            position: "top-right",
            autoClose: 1000
        })
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="">
      <h1 className="text-center font-[500] text-[22px] pt-5">Pending Doctors</h1>

      <table className="w-full bg-whiteSmoke mt-10 text-center">
        <thead className="py-10">
          <tr className="px-10 border border-b-white">
            <th className="py-2">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Speciality</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="w-full bg-whiteSmoke text-center">
          {pendingDoctors.map((items, index) => {
            return (
              <tr key={index} className="border border-b-white">
                <td className="py-2">{doctorDisplayId++}</td>
                <td>{items.first_name} {items.last_name}</td>
                <td>{items.email}</td>
                <td>{items.phone_number}</td>
                <td>{items.country}</td>
                <td>{items.specialities}</td>
                <td>{items.status}</td>
                <td className="flex justify-center mt-3 gap-3">
                    <IoMdCloseCircle
                      className="text-[18px] cursor-pointer"
                      onClick={() => rejectDoctor(items._id)}
                    />
                  <IoIosCheckmarkCircle
                    className="text-[18px] cursor-pointer"
                    onClick={() => acceptDoctor(items._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PendingDoctors;