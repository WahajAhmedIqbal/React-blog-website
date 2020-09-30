import React from "react";
import Logo from "../../components/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card/Card";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
}

export default Hero;
