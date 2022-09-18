import React from "react";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Releases from "./components/Releases/Releases";
import "./sass/_global.scss";

const App = () => {
  return (
    <>
      <Hero />
      <Features />
      <Releases />
    </>
  );
};

export default App;
