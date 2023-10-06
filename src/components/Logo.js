import React from "react";
import FitnessAndEducationLogo from "../assets/icons/Fitness&Education-LOGO.png";

const Logo = (width) => {
  return (
    <img
      src={FitnessAndEducationLogo}
      alt="fitness and education logo"
      style={{ width:"65px", borderRadius: "50px" }}
    />
  );
};

export default Logo;
