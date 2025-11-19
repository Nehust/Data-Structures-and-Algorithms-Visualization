import "./css/App.css";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import AlgoScreen from "./screens/AlgoScreen";
import Cookies from "js-cookie";
import HomeScreen from "./screens/HomeScreen";
import ReactGA from "react-ga4";

const App = () => {
  // Google Analytics
  useEffect(() => {
    ReactGA.initialize("G-0ERQ9E89XM");
    ReactGA.send({ hitType: "pageview", page: "home" });
  }, []);

  // Khởi tạo theme từ cookie (KHÔNG cần useEffect để setState)
  const [theme, setTheme] = useState(() => {
    return Cookies.get("theme") || "light";
  });

  // Cập nhật DOM mỗi khi theme đổi
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    Cookies.set("theme", newTheme);
  };

  return (
    //  basename={process.env.PUBLIC_URL + "/"}
    <Router>
      <Routes>
        <Route
          path="/about"
          element={<AboutScreen theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/algo"
          element={<AlgoScreen theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          index
          element={<HomeScreen theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
