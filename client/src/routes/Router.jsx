import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Aidoctor from '../pages/Aidoctor';
import LabTestInterpretation from '../pages/LabTestInterpretation';
import Supplements from '../pages/Supplements';
import SecondOpenion from '../pages/SecondOpenion';
import Signin from '../pages/auth/Signin';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';
import GeneralInfo from '../pages/GeneralInfo';
import Overview from '../pages/Overview';
import ChatChoose from '../pages/chat/ChatChoose';
import PersonalChat from "../pages/chat/PersonalChat";
import ChatHistory from "../pages/chat/ChatHistory";
import TestResults from "../pages/chat/TestResults";
import AddNewTest from "../pages/chat/AddNewTest";
import DoctorSignup from "../pages/auth/DoctorSignup";
import Experts from "../pages/Experts";
import Doctors from "../pages/Doctors";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AllUsers from "../pages/admin/AllUsers";
import AcceptedDoctors from "../pages/admin/AcceptedDoctors";
import RejectedDoctors from "../pages/admin/RejectedDoctors";
import PendingDoctors from "../pages/admin/PendingDoctors";
import ViewChatFromHistory from "../pages/chat/ViewChatFromHistory";
import LastChat from "../pages/chat/LastChat";

const routes = () => {
  const isAuthenticated = window.localStorage.getItem("token");
  const isAdmin = window.localStorage.getItem("admin");
  return (
    <Routes>
      {isAuthenticated && (
        <>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/welcome/general-info" element={<GeneralInfo />}  />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/overview" element={<Overview />} />
          <Route path="/dashboard/chat/choose" element={<ChatChoose />} />
          <Route path="/dashboard/chat/personal" element={<PersonalChat />} />
          <Route path="/dashboard/chat-history" element={<ChatHistory />} />
          <Route path="/dashboard/chat/chat-history/:id" element={<ViewChatFromHistory />} />
          <Route path="/dashboard/chat/last-chat" element={<LastChat />} />
          <Route path="/dashboard/test-results" element={<TestResults />} />
          <Route path="/dashboard/test-results/new" element={<AddNewTest />} />
          <Route path="/dashboard/experts" element={<Experts />} />
          <Route path="/dashboard/experts/:id" element={<Doctors />} />
        </>
      )}
        <>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <Home />} />
          <Route path="/ai-doctor" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <Aidoctor />} />
          <Route path="/lab-test-interpretation" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <LabTestInterpretation />} />
          <Route path="/supplement" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <Supplements />} />
          <Route path="/second-openion" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <SecondOpenion />} />
          <Route path="/auth/signin" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <Signin />} />
          <Route path="/auth/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <Signup />} />
          <Route path="/auth/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <ForgotPassword />} />
          <Route path="/auth/doctor-signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <DoctorSignup />} />
          <Route path="*" element={isAuthenticated ? <Navigate to="/dashboard" /> : isAdmin ? <Navigate to="/admin-dashboard" /> : <NotFound />} />
        </>

        {isAdmin && (
          <>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/all-users" element={<AllUsers />} />
            <Route path="/accepted-doctors" element={<AcceptedDoctors />} />
            <Route path="/pending-doctors" element={<PendingDoctors />} />
            <Route path="/rejected-doctors" element={<RejectedDoctors />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </>
        )}
      </Routes> 
  )
}

export default routes;