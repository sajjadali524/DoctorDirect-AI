import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  var userDisplayId = 1;

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(
          "https://doctordirect-ai.onrender.com/api/admin/all-users",
          { withCredentials: true }
        );
        setAllUsers(response.data.allUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllUsers();
  }, [allUsers]);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://doctordirect-ai.onrender.com/api/admin/delete-user/${userId}`,
        { withCredentials: true }
      );
      setAllUsers(allUsers.filter((user) => user.id !== userId));
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
      <h1 className="text-center font-[500] text-[22px] pt-5">All Users</h1>

      <table className="w-full bg-whiteSmoke mt-10 text-center">
        <thead className="py-10">
          <tr className="px-10 border border-b-white">
            <th className="py-2">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="w-full bg-whiteSmoke text-center">
          {allUsers.map((items, index) => {
            return (
              <tr key={index} className="border border-b-white">
                <td className="py-2">{userDisplayId++}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.role}</td>
                <td className="flex justify-center mt-3">
                  <MdDelete
                    className="text-[18px] cursor-pointer"
                    onClick={() => deleteUser(items._id)}
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

export default AllUsers;