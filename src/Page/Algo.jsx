import "../css/AlgoScreen.css";
import "../css/App.css";

import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { algoMap } from "../AlgoList";
import AlgoSection from "../components/AlgoScreen/AlgoSection";


// component header
function AlgoHeader({ header, theme, toggleTheme }) {
  return (
    <div id="header">
      <h2>
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
      </h2>
    </div>
  );
}

export default function Algo({ theme, toggleTheme }) {
  // Lấy tên thuật toán từ URL
  const location = useLocation();
  const algoName = location.pathname.slice(1);
  const algoDetails = algoMap[algoName];

  if (!algoDetails || !Array.isArray(algoDetails)) {
    return <div>Algorithm not found</div>;
  }

  const [header] = algoDetails;

  return (
    <div className="VisualizationMainPage">
      <div id="container">
        <AlgoHeader header={header} theme={theme} toggleTheme={toggleTheme} />
        <AlgoSection theme={theme} />
      </div>
    </div>
  );
}
