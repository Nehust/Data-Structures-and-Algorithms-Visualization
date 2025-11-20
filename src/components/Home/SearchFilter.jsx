import { Link } from "react-router-dom";
import React from "react";
import { algoMap } from "../../AlgoList";
let id = 0;
const SearchFilter = () => {
  return algoMap.map((name) => (
    <Link style={{ textDecoration: "none" }} key ={id++}>
      <button
        className="button"
      >
        <div className="algo-container">
          <div className="algo-name">{name}</div>
          {name && (
            <div className="algo-picture">
              <img
                alt={name}
                src={`./algo_buttons/${name}.png`}
              />
            </div>
          )}
        </div>
      </button>
    </Link>
  ));
};

export default SearchFilter;
