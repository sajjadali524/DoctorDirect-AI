import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AcceptedDoctors = () => {
  const [acceptedDoctors, setAcceptedDoctors] = useState([]);
  var doctorDisplayId = 1;

  useEffect(() => {
    const fetchAcceptedDoctors = async () => {
      try {
        const response = await axios.get(
          "https://doctordirect-ai.onrender.com/api/admin/accepted-doctors",
          { withCredentials: true }
        );
        setAcceptedDoctors(response.data.acceptedDoctors);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAcceptedDoctors();
  }, [acceptedDoctors]);

  const deleteDoctor = async (doctorId) => {
    try {
      await axios.delete(
        `https://doctordirect-ai.onrender.com/api/admin/delete-doctor/${doctorId}`,
        { withCredentials: true }
      );
      setAcceptedDoctors(
        acceptedDoctors.filter((doctor) => doctor.id !== doctorId)
      );
      toast.success("User Deleted", {
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
        Accepted Doctors
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
          {acceptedDoctors.map((items, index) => {
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

export default AcceptedDoctors;