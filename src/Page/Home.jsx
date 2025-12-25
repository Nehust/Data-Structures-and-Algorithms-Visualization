import "../css/App.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AlgoCard from "../components/Home/AlgoCard";
import { Router, Routes, Route } from "react-router-dom";
import About from "./About";
export default function Home() {
  const [filter, setFilter] = useState("All");
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <div className="bg-grid-container">
              <div className="bg-grid-pattern"></div>
              <div className="gradient-blob-1"></div>
              <div className="gradient-blob-2"></div>
            </div>
            {/* Header component */}
            <Header />
            <main>
              <div className="container-max space-y-16">
                <div className="hero-section">
                  <div className="hero-header">
                    <h1 className="hero-title">
                      Master{" "}
                      <span className="hero-title-gradient">
                        Data Structures
                      </span>
                    </h1>
                    <p className="hero-subtitle">
                      Interactive, vivid visuals to help you quickly grasp
                      algorithms and complexity thinking.
                    </p>
                  </div>
                  <div className="search-container">
                    <div className="search-wrapper"></div>
                    <div className="search-box">
                      <span className="search-icon">
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </span>
                      <input
                        className="search-input"
                        placeholder="Search structures (e.g., 'BST', 'Hash Map')..."
                        type="text"
                      />
                      <div className="search-kbd">
                        <kbd>Ctrl+K</kbd>
                      </div>
                    </div>
                  </div>
                  <div className="filter-buttons">
                    {["All", "Linear", "Trees", "Graphs", "Sorting"].map(
                      (category) => (
                        <button
                          key={category}
                          className={`btn-filter ${
                            filter === category ? "active" : ""
                          }`}
                          onClick={() => setFilter(category)}
                        >
                          {category}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <AlgoCard filter={filter} />
              </div>
            </main>

            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
}
