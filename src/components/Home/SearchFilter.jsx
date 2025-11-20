import { Link } from "react-router-dom";
import React from "react";
import { algoMap } from "../../AlgoList";
const id = 0;
const SearchFilter = () => {
  return algoMap.map((name) => (
    <Link style={{ textDecoration: "none" }}>
      <button
        className="button"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",
          color: "white",
          filter: "none",
        }}
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
