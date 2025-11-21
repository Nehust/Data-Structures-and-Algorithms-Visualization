import "../css/App.css";
import React, { useLocation } from "react";
import AlgoSection from "../components/AlgoScreen/AlgoSection.jsx";
import {algoMap} from "../AlgoList.js";

export default function Algo({ theme, toggleTheme }) {
  	const location = useLocation();
    const algoName = location.pathname.slice(1);
	const algoDetails = algoMap[algoName];
	const []

  const header = "Algorithm Visualization";

  const AlgoHeader = () => {
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
	};
	
  const AlgoFooter = () => {
    return (
      <div id="footer">
        <p>
          <Link to="/">Return to Home Page</Link>
        </p>
      </div>
    );
  };

  return (
    <div className="VisualizationMainPage">
      <div id="container">
        <AlgoHeader />
        <AlgoSection theme={theme} />
        <AlgoFooter />
      </div>
    </div>
  );
}
