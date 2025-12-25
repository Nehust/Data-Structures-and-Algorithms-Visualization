import { Link } from "react-router-dom";
import React from "react";
import { algoMap, algoFilter } from "../../AlgoList";

const categoryById = Object.fromEntries(
  algoFilter.map((f) => [f.id, f.category])
);

const variantByCategory = {
  "Linear Data Structures": "rose",
  Tree: "amber",
  "Graph Algorithms": "cyan",
  Sorting: "violet",
};

const iconByCategory = {
  "Linear Data Structures": "view_list",
  Tree: "account_tree",
  "Graph Algorithms": "share",
  Sorting: "bar_chart",
};

const operationsById = Object.fromEntries(
  algoFilter.map((f) => [f.id, f.operations])
);

export default function AlgoCard({ filter = "All" }) {
  const algoList = Object.entries(algoMap).map(([key, value]) => {
    const id = value[3];
    const title = value[0];
    const category = categoryById[key] || "Algorithms";
    const operations = operationsById[key] || [];
    const variant = variantByCategory[category] || "";
    const icon = iconByCategory[category] || "hub";
    const hasPseudo = value[2];
    return { key, id, title, category, operations, variant, icon, hasPseudo };
  });

  const filteredList = algoList.filter((item) => {
    if (!filter || filter === "All") return true;
    const normalizedCategory = item.category.trim();
    if (filter === "Linear")
      return normalizedCategory === "Linear Data Structures";
    if (filter === "Trees") return normalizedCategory === "Tree";
    if (filter === "Graphs") return normalizedCategory === "Graph Algorithms";
    if (filter === "Sorting") return normalizedCategory === "Sorting";
    return true;
  });

  return (
    <div className="cards-grid">
      {filteredList.map(
        ({
          key,
          id,
          title,
          category,
          operations,
          variant,
          icon,
          hasPseudo,
        }) => (
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
                  {operations && operations.length > 0 ? (
                    operations.slice(0, 3).map((op, idx) => (
                      <div className="card-stat" key={idx}>
                        <span className="card-stat-label">{op.name}</span>
                        <span className="card-stat-value">{op.complexity}</span>
                      </div>
                    ))
                  ) : (
                    <div className="card-stat">
                      <span className="card-stat-label">Pseudo</span>
                      <span className="card-stat-value">
                        {hasPseudo ? "Yes" : "No"}
                      </span>
                    </div>
                  )}
                </div>
                {(!operations || operations.length === 0) && (
                  <span className="card-tag">{category}</span>
                )}
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
