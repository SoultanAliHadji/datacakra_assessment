import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Destination from "./Destination";
import Dashboard from "./Dashboard";
import AccountProfile from "./AccountProfile";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";

const Main = () => {
  const currentPage = useSelector((state) => state.page.value);

  return (
    <>
      {currentPage === "login" ? (
        <Login />
      ) : currentPage === "register" &&
        localStorage.getItem("role") === "superadmin" ? (
        <Register />
      ) : (
        <div className="font-roboto flex flex-col max-w-screen min-h-screen justify-between">
          <header>
            <Navbar />
          </header>
          <section>
            {currentPage === "account-profile" ? (
              <AccountProfile />
            ) : currentPage === "destination" ? (
              <Destination />
            ) : currentPage === "dashboard" ? (
              <Dashboard />
            ) : (
              <Home />
            )}
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Main;
