import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home-page/Home";
import Login from "./pages/Login-page/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
