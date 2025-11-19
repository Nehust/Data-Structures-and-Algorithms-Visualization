import "./css/App.css";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Page/About";
import Algo from "./Page/Algo";
import Home from "./Page/Home";

const App = () => {
  //
  const [theme, setTheme] = useState("light");

  // Cập nhật DOM mỗi khi theme đổi
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme: hàm chuyển đổi theme là dark or light
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
      <Routes>
        <Route
          path="about"
          element={<About theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="algo"
          element={<Algo theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          index
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes> 
  );
};

export default App;
