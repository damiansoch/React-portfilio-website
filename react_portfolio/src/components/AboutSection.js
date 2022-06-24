import React from "react";
import home1 from "../image/New/home1.jpg";
import { About, Description, Image, Hide } from "./styles";

//framer motion
import { motion } from "framer-motion";

// styled

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
              your{" "}
              <motion.span
                animate={{ opacity: 1, transition: { duration: 2 } }}
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.2, transition: { duration: 1 } }}
              >
                dreams
              </motion.span>{" "}
              come
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
