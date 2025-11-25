import "../css/AlgoScreen.css";
import React, { useLocation } from "react";
import AlgoSection from "../components/AlgoScreen/AlgoSection.jsx";
import { algoMap } from "../AlgoList.js";

// component footer
function AlgoFooter() {
  return (
    <div id="footer">
      <p>
        <Link to="/">Return to Home Page</Link>
      </p>
    </div>
  );
}

// component header
function AlgoHeader(header, theme, toggleTheme) {
  return (
    <div id="header">
      <h1>
        <Link to="/">&#x3008;</Link>&nbsp;&nbsp;
        <>{header}</>
        <div id="toggle">
          {theme === "light" ? (
            <BsFillSunFill
              size={31}
              onClick={toggleTheme}
              color="#f9c333"
              className="rotate-effect"
            />
          ) : (
            <BsMoonFill
              size={29}
              onClick={toggleTheme}
              color="#d4f1f1"
              className="rotate-effect"
            />
          )}
        </div>
      </h1>
    </div>
  );
}

export default function Algo({ theme, toggleTheme }) {
  // Lấy tên thuật toán từ URL
  const location = useLocation();
  const algoName = location.pathname.slice(1);
  const algoDetails = algoMap[algoName];
  console.log(algoDetails);
  const [header, _] = algoDetails;

  return (
    <div className="VisualizationMainPage">
      <div id="container">
        <AlgoHeader header={header} theme={theme} toggleTheme={toggleTheme}  />
        <AlgoSection theme={theme} />
        <AlgoFooter />
      </div>
    </div>
  );
}
