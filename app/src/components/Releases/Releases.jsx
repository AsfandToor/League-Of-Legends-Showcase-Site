import React from "react";
import "./Releases.scss";

const Releases = () => {
  return (
    <div className="releases-section">
      <div className="release-title">- New Releases -</div>
      <div className="releases">
        <div className="champion-card">
          <div className="card-image">
            <img src="assets/images/neeko.jpg" alt="" />
          </div>
          <div className="card-text">Neeko</div>
        </div>
        <div className="champion-card">
          <div className="card-image">
            <img src="assets/images/jhin.jpg" alt="" />
          </div>
          <div className="card-text">Jhin</div>
        </div>
        <div className="champion-card">
          <div className="card-image">
            <img src="assets/images/diana.jpg" alt="" />
          </div>
          <div className="card-text">Diana</div>
        </div>
        <div className="champion-card">
          <div className="card-image">
            <img src="assets/images/biego.jpg" alt="" />
          </div>
          <div className="card-text">Viego</div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
