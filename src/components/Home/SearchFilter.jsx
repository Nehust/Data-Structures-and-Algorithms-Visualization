import { Link } from "react-router-dom";
import React from "react";
import { algoMap } from "../../AlgoList";
export default function SearchFilter() {
  // ✅ Biến đổi algoMap thành mảng các cặp [key, id]
  // algoMap = { "AVL": ["AVL Tree", "Category", "ID1"], ... }
  // entries = [ ["AVL", ["AVL Tree", "Category", "ID1"]], ... ]

  const algoList = Object.entries(algoMap).map(([key, value]) => {
    const id = value[3]; // Lấy ID ở vị trí thứ 4 trong mảng value (index 3)
    return [key, id];
  });

  return algoList.map(([key, id]) => (
    <Link to={`/${key}`} style={{ textDecoration: "none" }} key={id}>
      <button className="button">
        <div className="algo-container">
          <div className="algo-name">{algoMap[key][0]}</div>
          <div className="algo-picture">
            <img
              alt={algoMap[key][0]}
              src={`./algo_buttons/${algoMap[key][0]}.png`}
              onError={(e) => {
                const currentSrc = e.target.src;
                if (currentSrc.endsWith(".png")) {
                  e.target.src = `./algo_buttons/${algoMap[key][0]}.gif`;
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
