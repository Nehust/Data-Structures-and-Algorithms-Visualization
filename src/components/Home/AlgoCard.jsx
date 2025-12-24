import { Link } from "react-router-dom";
import React from "react";
import { algoMap, algoFilter } from "../../AlgoList";

const categoryById = Object.fromEntries(
  algoFilter.map((f) => [f.id, f.category])
);

const variantByCategory = {
  Lists: "emerald",
  "Linear Data Structures": "rose",
  "Trees and SkipList": "amber",
  "Graph Algorithms": "cyan",
  "Sorting and Quickselect": "violet",
  "Pattern Matching": "violet",
  HashMaps: "cyan",
  "DP & Extras": "violet",
};

const iconByCategory = {
  Lists: "data_array",
  "Linear Data Structures": "layers",
  "Trees and SkipList": "account_tree",
  "Graph Algorithms": "hub",
  "Sorting and Quickselect": "sort",
  "Pattern Matching": "search",
  HashMaps: "grid_view",
  "DP & Extras": "calculate",
};

export default function AlgoCard() {
  const algoList = Object.entries(algoMap).map(([key, value]) => {
    const id = value[3];
    const title = value[0];
    const category = categoryById[key] || "Algorithms";
    const variant = variantByCategory[category] || "";
    const icon = iconByCategory[category] || "hub";
    const hasPseudo = value[2];
    return { key, id, title, category, variant, icon, hasPseudo };
  });

  return (
    <div className="cards-grid">
      {algoList.map(
        ({ key, id, title, category, variant, icon, hasPseudo }) => (
          <Link
            to={`/${key}`}
            className={`card ${variant}`}
            key={id}
            style={{ textDecoration: "none" }}
          >
            <div className="card-inner">
              <div className="card-header">
                <div className="card-icon-section">
                  <div className="card-icon-wrapper icon-wrapper">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-label">{category}</p>
                  </div>
                </div>
                <div className="card-action">
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </div>
              </div>

              <div className="card-visual">
                <div className="card-visual-dot-grid"></div>
                <img
                  alt={title}
                  src={`/algo_buttons/${title}.png`}
                  onError={(e) => {
                    const currentSrc = e.currentTarget.src;
                    if (currentSrc.endsWith(".png")) {
                      e.currentTarget.src = `/algo_buttons/${title}.gif`;
                    } else if (currentSrc.endsWith(".gif")) {
                      e.currentTarget.style.display = "none";
                    }
                  }}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    zIndex: 10,
                  }}
                />
              </div>

              <div className="card-footer">
                <div className="card-stats">
                  <div className="card-stat">
                    <span className="card-stat-label">Pseudo</span>
                    <span className="card-stat-value">
                      {hasPseudo ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="card-stat">
                    <span className="card-stat-label">Type</span>
                    <span className="card-stat-value">
                      {category.split(" ")[0]}
                    </span>
                  </div>
                </div>
                <span className="card-tag">{category}</span>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
