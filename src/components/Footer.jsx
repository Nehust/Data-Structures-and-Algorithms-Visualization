import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-logo">
            <a className="footer-brand" href="#">
              <div className="footer-brand-icon">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <span className="footer-brand-text">
                DataStruct<span>Viz</span>
              </span>
            </a>
            <p className="footer-description">
              Building the next generation of computer science education tools.
              Visualizing complexity one node at a time.
            </p>
            <p className="footer-credits">
              Built by Pham Ngoc Tuyen (20235455). Inspired by
              <a href="https://csvistool.com/" target="_blank" rel="noreferrer">
                {" "}
                David Galles
              </a>
              .
            </p>
          </div>
          <div>
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-section-links">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Cheat Sheets</a>
              </li>
              <li>
                <a href="#">Community Forum</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-section-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2023 DataStructViz Inc. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/*            <footer>
              <div className="footer-container">
                <div className="footer-grid">
                  <div className="footer-col-logo">
                    <a className="footer-brand" href="#">
                      <div className="footer-brand-icon">
                        <span className="material-symbols-outlined">hub</span>
                      </div>
                      <span className="footer-brand-text">
                        DataStruct<span>Viz</span>
                      </span>
                    </a>
                    <p className="footer-description">
                      Building the next generation of computer science education
                      tools. Visualizing complexity one node at a time.
                    </p>
                  </div>
                  <div>
                    <h4 className="footer-section-title">Resources</h4>
                    <ul className="footer-section-links">
                      <li>
                        <a href="#">Documentation</a>
                      </li>
                      <li>
                        <a href="#">Cheat Sheets</a>
                      </li>
                      <li>
                        <a href="#">Community Forum</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="footer-section-title">Legal</h4>
                    <ul className="footer-section-links">
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-bottom">
                  <p className="footer-copyright">
                    © 2023 DataStructViz Inc. All rights reserved.
                  </p>
                  <div className="footer-social">
                    <a href="#">
                      <span className="material-symbols-outlined">public</span>
                    </a>
                    <a href="#">
                      <span className="material-symbols-outlined">mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </footer> */
