import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import Destination from "./Destination";
import { useSelector } from "react-redux";

const Main = () => {
  const currentPage = useSelector((state) => state.page.value);

  return (
    <div className="font-roboto flex flex-col max-w-screen min-h-screen justify-between">
      <header>
        <Navbar />
      </header>
      <section>{currentPage === "home" ? <Home /> : <Destination />}</section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
