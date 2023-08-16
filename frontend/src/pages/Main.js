import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Destination from "./Destination";
import Dashboard from "./Dashboard";
import AccountSetting from "./AccountProfile";
import { useSelector } from "react-redux";

const Main = () => {
  const currentPage = useSelector((state) => state.page.value);

  return (
    <div className="font-roboto flex flex-col max-w-screen min-h-screen justify-between">
      <header>
        <Navbar />
      </header>
      <section>
        {currentPage === "home" ? (
          <Home />
        ) : currentPage === "destination" ? (
          <Destination />
        ) : currentPage === "dashboard" ? (
          <Dashboard />
        ) : (
          <AccountSetting />
        )}
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
