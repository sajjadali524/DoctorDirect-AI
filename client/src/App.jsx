import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";
import { useLocation } from "react-router-dom";
import DashboardHeader from "./components/DashboardHeader";

const App = () => {
  const location = useLocation();
  const showHeaderAndFooter = ["/", "/ai-doctor", "/supplement", "/lab-test-interpretation", "/second-openion"];
  const hideHeaderAndFooter = ["/welcome/general-info", "/welcome", "/auth/signin", "/auth/signup", "/auth/forgot-password"];
  
  const shouldShowHeaderAndFooter = showHeaderAndFooter.includes(location.pathname);
  const shouldHideHeaderAndFooter = hideHeaderAndFooter.includes(location.pathname);

  return (
    <>
      {shouldShowHeaderAndFooter ? <Header /> : shouldHideHeaderAndFooter ? null : <DashboardHeader />}
      <Router />
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;