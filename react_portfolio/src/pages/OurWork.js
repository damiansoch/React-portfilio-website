import React, { useEffect, useRef } from "react";
import "react-slideshow-image/dist/styles.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";

import "../components/Styles/OurWork.scss";

import c_hash from "../image/New/Our_work _img/c_hash.png";
import css from "../image/New/Our_work _img/css.jpg";
import html from "../image/New/Our_work _img/html.png";
import javascript from "../image/New/Our_work _img/javascript.jpg";
import json from "../image/New/Our_work _img/json.jpg";
import node from "../image/New/Our_work _img/node.jpg";
import npm from "../image/New/Our_work _img/npm.jpg";
import react from "../image/New/Our_work _img/react.jpg";
import more from "../image/New/Our_work _img/more.jpg";
import styled from "styled-components";

// const images = [html, css, javascript, react, json, node, npm, c_hash, more];

// ----------------------------------------------------

const images = [
  {
    file: html,
    title: "HTML",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: html,
    title: "HTML",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: css,
    title: "CSS",
    description:
      "Gingerbread sweet sesame snaps tiramisu cheesecake dessert.  Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: javascript,
    title: "JavaScript",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie.",
  },
  {
    file: react,
    title: "React",
    description: " Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: json,
    title: "JSON",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: node,
    title: "node.js",
    description:
      "Gingerbread sweet sesame snaps tiramisu cheesecake dessert. Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. ",
  },
  {
    file: npm,
    title: "npm",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: c_hash,
    title: "C#",
    description:
      "Gingerbread sweet sesame snaps tiramisu cheesecake dessert.  Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: more,
    title: "More",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. Halvah pastry dragée gingerbread macaroon.",
  },
  {
    file: more,
    title: "More",
    description:
      " Tiramisu tiramisu pie dragée candy canes pudding cheesecake tart brownie. Halvah pastry dragée gingerbread macaroon.",
  },
];

// ---------------------------------------------------------------------

const OurWork = () => {
  gsap.registerPlugin(TextPlugin);
  const el = useRef();
  const q = gsap.utils.selector(el);
  let tl = gsap.timeline();
  useEffect(() => {
    tl.from(q(".img"), {
      scale: 0,
      ease: "bounce",
      duration: 1,
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
    })
      .to(q(".text1"), {
        opacity: 0.7,
        ease: "bounce",
        duration: 1,
        delay: -9,
      })
      .to("#text1", {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
        ease: "none",
        duration: 20,
        repeat: 0,
      })
      .to("#text1", {
        text: "Lollipop halvah cake dragée jelly beans tiramisu cheesecake carrot cake. Soufflé donut soufflé caramels sweet roll. Cotton candy sweet roll cake apple pie tart liquorice croissant candy canes. Muffin lollipop sesame snaps marzipan toffee donut muffin brownie muffin. Pie croissant gummies chupa chups lollipop gingerbread lemon drops topping candy canes. Lemon drops cake marzipan dragée liquorice jelly carrot cake candy canes. Marzipan soufflé powder bear claw jelly-o. ",
        ease: "none",
        duration: 20,
        repeat: 0,
      })
      .to(q(".text1"), {
        opacity: 0,
        ease: "bounce",
        duration: 4,
        delay: 3,
      });
  }, []);
  return (
    <>
      <div className="imgContainer" ref={el}>
        <div className="linkContainer">
          <img src={css} alt="" />
        </div>
        <div className="text1">
          <h1 id="title1">Example Title</h1>
          <hr />
          <br />
          <h4 id="text1"> </h4>
        </div>
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
        <img
          src={images[Math.round(Math.random() * 10)].file}
          alt=""
          className="img"
        />
      </div>
    </>
  );
};

export default OurWork;
