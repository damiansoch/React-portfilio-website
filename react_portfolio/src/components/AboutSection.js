import React from "react";
import home1 from "../image/New/home1.jpg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact me for any Webpage needs! I'm a professional website
          developer.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="coding monitor" />
      </div>
    </div>
  );
};

export default AboutSection;
