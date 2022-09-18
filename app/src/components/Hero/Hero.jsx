import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <div className="img-wrapper">
              <img src="assets/images/1.jpg" alt="" />
              <div className="shadow"></div>
            </div>
            <div className="caption">
              <h2>
                The Largest Esports Game!
                <br />
                Get the Best Experience
              </h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-wrapper">
              <img src="assets/images/2.jpg" alt="" />
              <div className="shadow"></div>
            </div>
            <div className="caption">
              <h2>
                The MOBA Prodigy!
                <br />
                Greatest RPG
              </h2>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img-wrapper">
              <img src="assets/images/4.png" alt="" />
              <div className="shadow"></div>
            </div>
            <div className="caption">
              <h2>
                Largest Champion Pool
                <br />
                Get the Best Experience
              </h2>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
