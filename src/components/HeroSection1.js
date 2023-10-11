import React, { useState, useEffect } from "react";
export default function HeroSection() {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);

  return (
    <div id="about" className="hero-wrapper">
      
      <div className="hero-section"></div>

      <div className="hero-content">
        {shouldShow && (
          <div className="hero-text-welcome">
            Welcome to
            <br />{" "}
            <strong className="word-in-text"> Fitness & Education</strong>{" "}
            <br />
            Here You can fine some grate workout exercises <br /> while learning
            about the anatomy of your body.
          </div>
        )}
        {shouldShow && (
          <div className="hero-text format">
            If you think you can, <br /> or if you this you cant,
            <br /> <strong className="word-in-text ">You're RIGHT !</strong>
          </div>
        )}
      </div>
    </div>
  );
}
