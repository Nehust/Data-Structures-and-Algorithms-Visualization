import { Link } from "react-router-dom";
import React from "react";
import { algoMap } from "../../AlgoList";
let id = 0;
export default function SearchFilter() {
  return algoMap.map((name) => (
    <Link to={`/${name}`} style={{ textDecoration: "none" }} key={id++}>
      <button className="button">
        <div className="algo-container">
          
          <div className="algo-name">{name}</div>

          <div className="algo-picture">
            <img alt={name} src={`./algo_buttons/${name}.png`} />
          </div>

        </div>
      </button>
    </Link>
  ));
}
