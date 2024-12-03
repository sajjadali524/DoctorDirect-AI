import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import { useLocation } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";
import AdminRouter from "./routes/AdminRouter";

const App = () => {
  const location = useLocation();
  const showHeaderAndFooter = ["/", "/ai-doctor", "/supplement", "/lab-test-interpretation", "/second-openion"];
  const hideHeaderAndFooter = ["/welcome/general-info", "/welcome", "/auth/signin", "/auth/signup", "/auth/forgot-password", "/auth/doctor-signup"];
  const hideRouter = ["/admin-dashboard", "/all-users", "/accepted-doctors", "/pending-doctors", "/rejected-doctors"];
  
  const shouldShowHeaderAndFooter = showHeaderAndFooter.includes(location.pathname);
  const shouldHideHeaderAndFooter = hideHeaderAndFooter.includes(location.pathname);
  const hideRouterAdmin = hideRouter.includes(location.pathname);

  return (
    <>
      {shouldShowHeaderAndFooter ? <Header /> : shouldHideHeaderAndFooter ? null : hideRouterAdmin ? null : <DashboardHeader />}
      {hideRouterAdmin ? <AdminRouter /> : <Router />}
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;