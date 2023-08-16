import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/destination" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
