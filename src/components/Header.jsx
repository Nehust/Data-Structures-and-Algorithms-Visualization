import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        <a className="nav-brand" href="#">
          <div className="nav-brand-icon">
            <div className="nav-brand-icon-inner">
              <span className="material-symbols-outlined">hub</span>
            </div>
          </div>
          <div className="nav-brand-text">
            <span className="nav-brand-text-main">
              <span>DataStruct</span>{" "}
              <span
                style={{ color: "var(--text-primary)", fontSize: "0.8rem" }}
              >
                and
              </span>{" "}
              <span>Algorithms</span> <span>Viz</span>
            </span>
          </div>
        </a>
        <div className="nav-menu">
          <ul className="nav-menu-list">
            <li className="nav-menu-item">
              <a className="active" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-menu-item">
              <a href="#">Playground</a>
            </li>
            <li className="nav-menu-item">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="nav-notif-btn">
            <span
              className="material-symbols-outlined filled"
              style={{ fontSize: "1.5rem" }}
            >
              notifications
            </span>
            <span className="nav-notif-dot"></span>
          </button>
          <div className="nav-divider"></div>
          <button className="nav-user-btn">
            <div className="nav-user-info">
              <p className="nav-user-name">Nehut</p>
              <p className="nav-user-role">Pro Member</p>
            </div>
            <div className="nav-user-avatar">
              <div className="nav-user-avatar-inner">JD</div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
