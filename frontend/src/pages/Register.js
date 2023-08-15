import "../App.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [message, setMessage] = useState();

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
      axios
        .post(
          "https://exampletravel-api.000webhostapp.com/auth/register",
          {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
          {
            headers: {
              Accept: "application/json, text/plain, /",
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer",
            },
          }
        )
        .then((res) => {
          console.log(res);
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setMessage();
        });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-4/5 sm:w-2/4 md:2/5 lg:w-1/3 p-5 border">
        <div className="grid gap-7">
          <h1 className="text-3xl font-semibold">Register</h1>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <label htmlFor="name">Nama</label>
              <input
                className="border-2 border-gray-200 enabled:hover:border-gray-300 disabled:opacity-75 px-2 rounded"
                id="name"
                type="text"
                placeholder="nama lengkap"
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
              <label htmlFor="password-confirmation">Ulangi Password</label>
              <input
                className="border-2 border-gray-200 enabled:hover:border-gray-300 disabled:opacity-75 px-2 rounded"
                id="password-confirmation"
                type="password"
                placeholder="ulangi password"
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
          <button
            className="bg-[#e4892c] hover:bg-[#bf7324] text-white font-medium p-1 rounded"
            onClick={HandleRegister}
          >
            Login
          </button>
        </div>
        <label className="text-red-600 text-sm">{message}</label>
      </div>
    </div>
  );
};

export default Register;
