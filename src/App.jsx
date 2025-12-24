import "./css/App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Page/About";
import Algo from "./Page/Algo";
import Home from "./Page/Home";

export default function App() {
  //
  // Cập nhật DOM mỗi khi theme đổi
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <Routes>
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path=":algo"
        element={<Algo />}
      />
      <Route
        path="/*"
        element={<Home />}
      />
    </Routes>
  );
}
