import React from "react";

export default function Footer() {
  return (
    <footer className="footer-simple">
      <div className="footer-container-simple">
        <p className="footer-credits">
          Built by Pham Ngoc Tuyen (20235455). Inspired by
          <a href="https://csvistool.com/" target="_blank" rel="noreferrer">
            {" "}
            David Galles
          </a>
          .
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} DataStructViz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
