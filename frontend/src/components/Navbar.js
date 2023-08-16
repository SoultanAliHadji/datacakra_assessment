import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { moveTo } from "../redux/pageSlice";

const Navbar = () => {
  const currentPage = useSelector((state) => state.page.value);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white drop-shadow-xl">
      <div className="container mx-auto xl:px-20 grid grid-flow-col items-center py-1">
        <div className="nav-brand font-medium">Travel App</div>
        <div className="nav-link">
          <ul className="flex gap-5 justify-end items-center text-gray-900">
            <li
              className={
                "cursor-pointer hover:text-[#e4892c]" +
                (currentPage === "home"
                  ? " text-[#e4892c] font-medium pointer-events-none"
                  : "")
              }
              onClick={() => {
                dispatch(moveTo("home"));
                window.history.replaceState(null, null, "/home");
              }}
            >
              Home
            </li>
            <li
              className={
                "cursor-pointer hover:text-[#e4892c]" +
                (currentPage === "destination"
                  ? " text-[#e4892c] font-medium pointer-events-none"
                  : "")
              }
              onClick={() => {
                dispatch(moveTo("destination"));
                window.history.replaceState(null, null, "/destination");
              }}
            >
              Destination
            </li>
            <li>
              <button className="flex items-center hover:text-[#e4892c] hover:font-medium">
                <Icon className="text-4xl" icon="ei:user" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
