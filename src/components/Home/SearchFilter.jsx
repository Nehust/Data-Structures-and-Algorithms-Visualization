import { Link } from "react-router-dom";
import React from "react";
import { algoMap } from "../../AlgoList";
let id = 0;
export default function SearchFilter() {
  const algoList = Object.values(algoMap).map(([name, ,id]) => [name, id]
  );
  return algoList.map(([name, id]) => (
    <Link to={`/${name}`} style={{ textDecoration: "none" }} key={id}>
      <button className="button">
        <div className="algo-container">
          <div className="algo-name">{name}</div>

          <div className="algo-picture">
            <img
              alt={name}
              src={`./algo_buttons/${name}.png`}
              onError={(e) => {
                const currentSrc = e.target.src;
                if (currentSrc.endsWith(".png")) {
                  e.target.src = `./algo_buttons/${name}.gif`;
                } else if (currentSrc.endsWith(".gif")) {
                  e.target.style.display = "none";
                }
              }}
            />
          </div>
        </div>
      </button>
    </Link>
  ));
}
