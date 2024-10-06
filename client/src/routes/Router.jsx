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

const routes = () => {
  const isAuthenticated = window.localStorage.getItem("token");
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
          <Route path="/dashboard/test-results" element={<TestResults />} />
          <Route path="/dashboard/test-results/new" element={<AddNewTest />} />
        </>
      )}
        <>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />} />
          <Route path="/ai-doctor" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Aidoctor />} />
          <Route path="/lab-test-interpretation" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LabTestInterpretation />} />
          <Route path="/supplement" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Supplements />} />
          <Route path="/second-openion" element={isAuthenticated ? <Navigate to="/dashboard" /> : <SecondOpenion />} />
          <Route path="/auth/signin" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signin />} />
          <Route path="/auth/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/auth/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" /> : <ForgotPassword />} />
          <Route path="*" element={isAuthenticated ? <Navigate to="/dashboard" /> : <NotFound />} />
        </>
      </Routes> 
  )
}

export default routes;