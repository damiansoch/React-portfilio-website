import React from "react";
import home1 from "../image/New/home1.jpg";
import { About, Description, Image, Hide } from "./styles";

// styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact me for any Webpage needs! I'm a professional website
          developer.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="coding monitor" />
      </Image>
    </About>
  );
};

// dtyled components

export default AboutSection;
