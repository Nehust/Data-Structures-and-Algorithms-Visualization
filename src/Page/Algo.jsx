import "../css/App.css";

import { Link, useLocation } from "react-router-dom";
import { algoMap } from "../AlgoList";
import AlgoSection from "../components/AlgoScreen/AlgoSection";

// component header
function AlgoHeader({ header }) {
  return (
    <div id="header">
      <h2>
        <Link to="/">&#x3008;</Link>&nbsp;&nbsp;
        <>{header}</>
      </h2>
    </div>
  );
}

export default function Algo() {
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
        <AlgoHeader header={header} />
        <AlgoSection />
      </div>
    </div>
  );
}
