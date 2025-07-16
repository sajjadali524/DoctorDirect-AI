import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const RejectedDoctors = () => {
  const [rejectedDoctors, setRejectedDoctors] = useState([]);
  var doctorDisplayId = 1;

  useEffect(() => {
    const fetchRejectedDoctors = async () => {
      try {
        const response = await axios.get(
          "https://doctordirect-ai.onrender.com/api/admin/rejected-doctors",
          { withCredentials: true }
        );
        setRejectedDoctors(response.data.rejectedDoctors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRejectedDoctors();
  }, [rejectedDoctors]);

  const deleteDoctor = async (doctorId) => {
    try {
      await axios.delete(
        `https://doctordirect-ai.onrender.com/api/admin/delete-doctor/${doctorId}`,
        { withCredentials: true }
      );
      setRejectedDoctors(
        rejectedDoctors.filter((doctor) => doctor.id !== doctorId)
      );
      toast.success("Doctor Deleted", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h1 className="text-center font-[500] text-[22px] pt-5">
        Rejected Doctors
      </h1>

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
          {rejectedDoctors.map((items, index) => {
            return (
              <tr key={index} className="border border-b-white">
                <td className="py-2">{doctorDisplayId++}</td>
                <td>
                  {items.first_name} {items.last_name}
                </td>
                <td>{items.email}</td>
                <td>{items.phone_number}</td>
                <td>{items.country}</td>
                <td>{items.specialities}</td>
                <td>{items.status}</td>
                <td className="flex justify-center mt-3">
                  <MdDelete
                    className="text-[18px] cursor-pointer"
                    onClick={() => deleteDoctor(items._id)}
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

export default RejectedDoctors;