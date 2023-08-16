import { Button } from "./Button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveTo } from "../redux/pageSlice";

const Navbar = () => {
  const [accountNav, setAccountNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const currentPage = useSelector((state) => state.page.value);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white drop-shadow-xl">
      <div className="container mx-auto px-6 md:px-0 xl:px-20 grid md:grid-flow-col items-center py-1">
        <div className="grid grid-flow-col items-center">
          <div className="text-xl font-medium text-[#e4892c] pointer-events-none">
            Travel App
          </div>
          <div className="flex justify-end md:hidden">
            <button
              className="hover:text-[#e4892c]"
              onClick={() => setShowNav(showNav === false ? true : false)}
            >
              <Icon className="text-4xl" icon="ion:menu" />
            </button>
          </div>
        </div>
        <div
          className={
            "md:block" + (showNav === false ? " hidden" : " my-2 md:my-0")
          }
        >
          <ul className="grid md:flex justify-center md:justify-end items-center text-gray-900 gap-2 md:gap-5">
            <li
              className={
                "cursor-pointer hover:text-[#e4892c] text-center md:text-start" +
                (currentPage === "home"
                  ? " text-[#e4892c] font-medium pointer-events-none"
                  : "")
              }
              onClick={() => {
                dispatch(moveTo("home"));
                window.history.replaceState(null, null, "/home");
                setShowNav(false);
              }}
            >
              Home
            </li>
            <li
              className={
                "cursor-pointer hover:text-[#e4892c] text-center md:text-start" +
                (currentPage === "destination"
                  ? " text-[#e4892c] font-medium pointer-events-none"
                  : "")
              }
              onClick={() => {
                dispatch(moveTo("destination"));
                window.history.replaceState(null, null, "/destination");
                setShowNav(false);
              }}
            >
              Destination
            </li>
            <li
              className={
                "cursor-pointer hover:text-[#e4892c] text-center md:text-start" +
                (currentPage === "dashboard"
                  ? " text-[#e4892c] font-medium pointer-events-none"
                  : "")
              }
              onClick={() => {
                dispatch(moveTo("dashboard"));
                window.history.replaceState(null, null, "/dashboard");
                setShowNav(false);
              }}
            >
              Dashboard
            </li>
            {localStorage.getItem("is-login") === "true" ? (
              <li
                onMouseEnter={() => {
                  setAccountNav(true);
                }}
                onMouseLeave={() => {
                  setAccountNav(false);
                }}
              >
                <div
                  className={
                    "flex items-center cursor-pointer justify-center md:justify-start" +
                    (accountNav === true ? " text-[#e4892c] font-medium" : "")
                  }
                >
                  <Icon className="text-4xl" icon="ei:user" />
                </div>
                <div
                  className={
                    "absolute -ms-9 md:-ms-14 pt-4" +
                    (accountNav === false ? " hidden" : "")
                  }
                >
                  <div className="grid border-2 bg-slate-50 pt-1 rounded-b-md">
                    <button className="text-xl px-4 py-2 cursor-default pointer-event-none">
                      {localStorage.getItem("user")}
                    </button>
                    <hr />
                    <button
                      className="px-2 py-1 hover:bg-[#e4892c] hover:text-white text-start flex items-center gap-2"
                      onClick={() => {
                        dispatch(moveTo("account-profile"));
                        window.history.replaceState(
                          null,
                          null,
                          "/account-profile"
                        );
                        setAccountNav(false);
                        setShowNav(false);
                      }}
                    >
                      <Icon icon="uil:setting" />
                      <label className="cursor-pointer">Account Profile</label>
                    </button>
                    <hr />
                    <button
                      className="px-2 py-1 hover:bg-red-600 hover:text-white text-start flex items-center gap-2"
                      onClick={() => {
                        localStorage.setItem("is-login", false);
                        setAccountNav(false);
                        setShowNav(false);
                      }}
                    >
                      <Icon icon="mdi:logout-variant" />
                      <label className="cursor-pointer">Logout</label>
                    </button>
                    <hr />
                    <div className="flex justify-center">
                      <Icon icon="fluent:line-horizontal-1-20-filled" />
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="flex justify-center md:flex">
                <Button
                  moreStyles="text-[#e4892c] border-2 border-[#e4892c] hover:text-white hover:bg-[#e4892c]"
                  title="Login"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
