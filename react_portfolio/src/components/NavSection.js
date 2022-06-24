import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavSection = () => {
  return (
    <Nav>
      <h1>
        <Link to="/">DKMS Websites</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/work">My Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  max-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  h1 {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    letter-spacing: 2px;
  }

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  @media screen and (max-width: 1170px) {
    display: none;
  }
`;

export default NavSection;
