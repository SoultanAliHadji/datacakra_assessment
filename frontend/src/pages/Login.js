import "../App.css";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { moveTo } from "../redux/pageSlice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const login = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const HandleLogin = () => {
    setMessage();
    if (email === undefined || password === undefined) {
      setMessage("*semua form tidak boleh kosong!");
    } else {
      login.map((item) => {
        if (item.email === email && item.password === password) {
          localStorage.setItem("name", item.name);
          localStorage.setItem("email", item.email);
          localStorage.setItem("role", item.role);
          localStorage.setItem("is-login", true);
          dispatch(moveTo("home"));
        } else {
          setMessage("*email/password salah!");
        }
      });
    }
  };

  // const HandleLogin = () => {
  //   setMessage();
  //   if (email === undefined || password === undefined) {
  //     setMessage("*semua form tidak boleh kosong!");
  //   } else {
  //     axios
  //       .get("https://exampletravelapi.datacakra.com/sanctum/csrf-cookie")
  //       .then((res) => {
  //         console.log(res);
  //         axios
  //           .post(
  //             "https://exampletravelapi.datacakra.com/api/login",
  //             {
  //               email: email,
  //               password: password,
  //             },
  //             {
  //               headers: {
  //                 Accept: "application/json, text/plain, /",
  //                 "Content-Type": "multipart/form-data",
  //               },
  //             }
  //           )
  //           .then((res) => {
  //             localStorage.setItem("token", res.data.token);
  //             localStorage.setItem("is-login", true);
  //             window.location.href = "/";
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             setMessage("*email/password salah!");
  //             localStorage.setItem("is-login", true);
  //           });
  //       });
  //   }
  // };

  return (
    <div className="font-roboto w-screen h-screen flex justify-center items-center">
      <div className="w-4/5 sm:w-2/4 md:2/5 lg:w-1/3 p-5 border rounded-xl shadow-xl">
        <div className="grid gap-8">
          <h1 className="text-3xl text-[#e4892c] font-medium">Login</h1>
          <div className="">
            <label className="text-lg font-medium">Welcome back,</label>
            <br />
            <label>sign in to continue explore more</label>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="border-2 border-gray-200 enabled:hover:border-gray-300 disabled:opacity-75 px-2 rounded"
                id="email"
                type="email"
                placeholder="user@email.com"
                value={email}
                onChange={(value) => setEmail(value.target.value)}
                onKeyDown={(key) => {
                  key.key === "Enter" && HandleLogin();
                }}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="border-2 border-gray-200 enabled:hover:border-gray-300 disabled:opacity-75 px-2 rounded"
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(value) => setPassword(value.target.value)}
                onKeyDown={(key) => {
                  key.key === "Enter" && HandleLogin();
                }}
              />
            </div>
          </div>
          <Button
            moreStyles="bg-[#e4892c] text-white"
            title="Login"
            onClick={HandleLogin}
          />
        </div>
        <div className="mt-1">
          <label className="text-red-600 text-sm">{message}</label>
        </div>
        <div className="text-sm flex justify-center mt-3 gap-1">
          <label>Don't have an account yet?</label>
          <span
            className="text-[#e4892c] hover:text-[#bf7324] cursor-pointer"
            onClick={() => {
              dispatch(moveTo("register"));
              window.history.replaceState(null, null, "/register");
            }}
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
