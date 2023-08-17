import "../App.css";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { moveTo } from "../redux/pageSlice";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [message, setMessage] = useState();
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const HandleRegister = () => {
    setMessage();
    if (
      name === undefined ||
      email === undefined ||
      password === undefined ||
      passwordConfirmation === undefined
    ) {
      setMessage("*semua form tidak boleh kosong!");
    } else if (password !== passwordConfirmation) {
      setMessage("*password tidak sesuai!");
    } else {
      dispatch(
        addUser({
          id: users.length + 1,
          name: name,
          email: email,
          password: password,
          role: "user",
          token: name + "-token",
        })
      );
      dispatch(moveTo("login"));
      window.history.replaceState(null, null, "/login");
    }
  };

  // const HandleRegister = () => {
  //   setMessage();
  //   if (
  //     name === undefined ||
  //     email === undefined ||
  //     password === undefined ||
  //     passwordConfirmation === undefined
  //   ) {
  //     setMessage("*semua form tidak boleh kosong!");
  //   } else if (password !== passwordConfirmation) {
  //     setMessage("*password tidak sesuai!");
  //   } else {
  //     axios
  //       .post(
  //         "https://exampletravelapi.datacakra.com/api/register",
  //         {
  //           name: name,
  //           email: email,
  //           password: password,
  //           password_confirmation: passwordConfirmation,
  //         },
  //         {
  //           headers: {
  //             Accept: "application/json, text/plain, /",
  //             "Content-Type": "multipart/form-data",
  //             Authorization:
  //               "Bearer" + " 10|Qj3reAxIjI2CGNnmvoX5xovhHJTS495u9CfKGjiu",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         window.location.href = "/login";
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(() => {
  //         setMessage();
  //       });
  //   }
  // };

  return (
    <div className="font-roboto w-screen h-screen flex justify-center items-center">
      <div className="w-4/5 sm:w-2/4 md:2/5 lg:w-1/3 p-5 border rounded-xl shadow-xl">
        <div className="grid gap-8">
          <h1 className="text-3xl text-[#e4892c] font-medium">Register</h1>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="border-2 border-gray-200 enabled:hover:border-gray-300 disabled:opacity-75 px-2 rounded"
                id="name"
                type="text"
                placeholder="full name"
                value={name}
                onChange={(value) => setName(value.target.value)}
                onKeyDown={(key) => {
                  key.key === "Enter" && HandleRegister();
                }}
              />
            </div>
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
                  key.key === "Enter" && HandleRegister();
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
                  key.key === "Enter" && HandleRegister();
                }}
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="password-confirmation">Retype Password</label>
              <input
                className="border-2 border-gray-200 enabled:hover:border-gray-300 disabled:opacity-75 px-2 rounded"
                id="password-confirmation"
                type="password"
                placeholder="retype password"
                value={passwordConfirmation}
                onChange={(value) =>
                  setPasswordConfirmation(value.target.value)
                }
                onKeyDown={(key) => {
                  key.key === "Enter" && HandleRegister();
                }}
              />
            </div>
          </div>
          <Button
            moreStyles="bg-[#e4892c] text-white"
            title="Register"
            onClick={HandleRegister}
          />
        </div>
        <div className="mt-1">
          <label className="text-red-600 text-sm">{message}</label>
        </div>
        <div className="text-sm flex justify-center mt-3 gap-1">
          <label>Already have an account?</label>
          <span
            className="text-[#e4892c] hover:text-[#bf7324] cursor-pointer"
            onClick={() => {
              dispatch(moveTo("login"));
              window.history.replaceState(null, null, "/login");
            }}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
