import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const location = useLocation();
  console.log(location);
  //we can use this to navidate to specific object inside the array of objects (using useState set up current state to something and then compare it to the pathname)
  return (
    <StyledDetails>
      <h1>Details Page</h1>
    </StyledDetails>
  );
};

const StyledDetails = styled.div`
  color: white;
`;

export default Details;
