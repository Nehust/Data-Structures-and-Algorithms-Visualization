import "../css/App.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchFilter from "../components/Home/SearchFilter";
import { Router, Routes, Route } from "react-router-dom";
import About from "./About";
export default function Home({ theme, toggleTheme }) {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="container">
            {/* Hiển thị header */}
            <Header theme={theme} toggleTheme={toggleTheme} />

            {/* Hiển thị nội dung chính */}
            <div className="content">
              <div className="outer-flex">
                {/* Side Navigator*/}
                <div className="side-panel">
                  {/* Search Bar */}
                  <input
                    className="dsa-filter"
                    placeholder="Search..."
                    type="search"
                  />
                </div>

                <div className="mid-flex">
                  <div className="inner-flex">
                    <SearchFilter />
                  </div>
                </div>
              </div>
            </div>

            {/* Hiển thị footer */}
            <Footer />
          </div>
        }
       />
      <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme} />} />
    </Routes>
  );
}
