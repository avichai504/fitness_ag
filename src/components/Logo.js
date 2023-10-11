import React from "react";
import FitnessAndEducationLogo from "../assets/icons/Fitness&Education-LOGO.png";

const Logo = ({ width = '65px', height = '65px' }) => {
  return (
    <img
      src={FitnessAndEducationLogo}
      alt="fitness and education logo"
      style={{ width, height, borderRadius: "50px" }}
    />
  );
};

export default Logo;
