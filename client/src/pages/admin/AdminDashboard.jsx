import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [allUsers, setAllUsers] = useState("");
  const [allDoctors, setAllDoctors] = useState("");
  const [acceptedDoctors, setAcceptedDoctors] = useState("");
  const [pendingDoctors, setPendingDoctors] = useState("");
  const [rejectedDoctors, setRejectedDoctors] = useState("");
  useEffect(() => {
    const fetchAllUsers = async() => {
      const response = await axios.get("http://localhost:8000/api/admin/all-users", {withCredentials: true});
      setAllUsers(response.data.length);
    };

    const fetchAllDoctors = async() => {
      const response = await axios.get("http://localhost:8000/api/admin/all-doctors", {withCredentials: true});
      setAllDoctors(response.data.length);
    };
    const fetchAcceptedDoctors = async() => {
      const response = await axios.get("http://localhost:8000/api/admin/accepted-doctors", {withCredentials: true});
      setAcceptedDoctors(response.data.length);
    };
    const fetchPendingDoctors = async() => {
      const response = await axios.get("http://localhost:8000/api/admin/pending-doctors", {withCredentials: true});
      setPendingDoctors(response.data.length);
    };
    const fetchRejectedDoctors = async() => {
      const response = await axios.get("http://localhost:8000/api/admin/rejected-doctors", {withCredentials: true});
      setRejectedDoctors(response.data.length);
    };

    fetchAllUsers();
    fetchAllDoctors();
    fetchAcceptedDoctors();
    fetchPendingDoctors();
    fetchRejectedDoctors();
  })
  return (
    <div className="grid grid-cols-3 gap-5 p-10">
      <div className="bg-whiteSmoke shadow-md p-10 text-center rounded-md">
        <p>Total Users</p>
        <p>{allUsers}</p>
      </div>
      <div className="bg-whiteSmoke shadow-md p-10 text-center rounded-md">
        <p>Total Doctors</p>
        <p>{allDoctors}</p>
      </div>
      <div className="bg-whiteSmoke shadow-md p-10 text-center rounded-md">
        <p>Accepted Doctors</p>
        <p>{acceptedDoctors}</p>
      </div>
      <div className="bg-whiteSmoke shadow-md p-10 text-center rounded-md">
        <p>Pending Doctors</p>
        <p>{pendingDoctors}</p>
      </div>
      <div className="bg-whiteSmoke shadow-md p-10 text-center rounded-md">
        <p>Rejected Doctors</p>
        <p>{rejectedDoctors}</p>
      </div>
    </div>
  )
}

export default AdminDashboard;

