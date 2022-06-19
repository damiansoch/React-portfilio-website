import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-evenly;
  padding: 5rem 5rem;
  color: white;
`;
export const Services = styled(About)`
  flex-direction: row-reverse;

  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export const Description = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-weight: lighter;
    text-align: center;
  }
  button {
    width: 200px;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
