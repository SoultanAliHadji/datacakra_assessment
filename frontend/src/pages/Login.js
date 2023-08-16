import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const HandleLogin = () => {
    setMessage();

    if (email === undefined || password === undefined) {
      setMessage("*semua form tidak boleh kosong!");
    } else {
      axios
        .get("https://exampletravelapi.datacakra.com/sanctum/csrf-cookie")
        .then((res) => {
          console.log(res)
          axios
            .post(
              "https://exampletravelapi.datacakra.com/api/login",
              {
                email: email,
                password: password,
              },
              {
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((res) => {
              localStorage.setItem("token", res.data.token);
              window.location.href = "/";
            })
            .catch((err) => {
              console.log(err);
              setMessage("*email/password salah!");
            });
        });
    }
  };

  return (
    <div className="font-roboto w-screen h-screen flex justify-center items-center">
      <div className="w-4/5 sm:w-2/4 md:2/5 lg:w-1/3 p-5 border">
        <div className="grid gap-7">
          <h1 className="text-3xl font-medium">Login</h1>
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
          <button
            className="drop-shadow-md bg-[#e4892c] hover:bg-[#bf7324] text-white font-medium p-1 rounded"
            onClick={HandleLogin}
          >
            Login
          </button>
        </div>
        <label className="text-red-600 text-sm">{message}</label>
      </div>
    </div>
  );
};

export default Login;
