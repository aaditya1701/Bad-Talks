import React from "react";
import "./WhatIsBad.css";

export default function WhatIsBad() {
  return (
    <section className="main_container" style={{ width: "100%" }}>
      <div className="heading">
        <h1>
          WHAT DOES{" "}
          <span style={{ color: "rgba(255, 0, 43, 0.874)" }}>B.A.D</span> MEAN?
        </h1>
      </div>
      <div className="content">
        <div className="first">
          <img src="./assets/img1.jpg" alt="img" className="image-main" />
        </div>
        <div
          className="second"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="image">
            <img src="./src/assets/B.png" className="img" />
            <div className="info">
              <h2>Breakdown</h2>
              <p>
                CEOs share their stories by breaking down their career paths,
                revealing the critical steps, failures, and learnings that
                shaped their success. This segment emphasizes understanding the
                foundational elements that contribute to their professional
                journeys
              </p>
            </div>
          </div>
          <div className="image">
            <img src="./src/assets/A.png" className="img2" />
            <div className="info">
              <h2>Analysis</h2>
              <p>
                This part involves an in-depth look at the business strategies,
                market dynamics, and leadership principles employed by these
                leaders. This segment provides a comprehensive understanding of
                the practical applications of business theories and models.
              </p>
            </div>
          </div>
          <div className="image">
            <img src="./src/assets/D.png" className="img" />
            <div className="info">
              <h2>Decision</h2>
              <p>
                Focuses on the creative and strategic aspects of leadership,
                where CEOs share their approaches to innovation, strategic
                planning, and problem-solving and how execute their ideas. It’s
                about designing a roadmap to success, highlighting the
                importance of foresight, adaptability, and innovation in the
                corporate world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
