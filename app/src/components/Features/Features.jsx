import React from "react";
import { GiGamepad } from "react-icons/gi";
import { FaKey } from "react-icons/fa";
import { SiRiotgames } from "react-icons/si";
import "./Features.scss";

const Features = () => {
  return (
    <section className="features-section">
      <div className="section-title">
        Immerse yourself into the League of Legends
      </div>
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <div className="icon">
              <SiRiotgames color="#1d1d28" fontSize="4rem" />
            </div>
          </div>
          <div className="feature-text">
            The all new <span>MOBA</span> game
            <br />
            that will test your strategic
            <br />
            and tactical skills.
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <div className="icon">
              <FaKey color="#1d1d28" fontSize="4rem" />
            </div>
          </div>
          <div className="feature-text">
            Get Ready to <span>Lock</span> yourself
            <br />
            in the world so vast
            <br />
            that will bound your imagination.
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <div className="icon">
              <GiGamepad color="#1d1d28" fontSize="5rem" />
            </div>
          </div>
          <div className="feature-text">
            <span>Embrace</span> the gaming experience
            <br />
            and immerse yourself in the gameplay
            <br />
            you never imagined.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
