import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  height: auto;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Banners = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  width: fit-content;

  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <Banners
          data-scroll
          data-scroll-speed="8"
          data-scroll-direction="horizontal"
          data-scroll-target="#up">
          <span>Fashion is an armour </span>
        </Banners>
        <Banners
          data-scroll
          data-scroll-speed="-6"
          data-scroll-direction="horizontal"
          data-scroll-target="#up">
          <span>to survive everyday life.</span>
        </Banners>
        <Banners
          data-scroll
          data-scroll-speed="6"
          data-scroll-direction="horizontal"
          data-scroll-target="#up">
          <span>One is never over-dressed </span>
        </Banners>
        <Banners
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
          data-scroll-target="#up">
          <span>or under-dressed</span>
        </Banners>
        <Banners
          data-scroll
          data-scroll-speed="6"
          data-scroll-direction="horizontal"
          data-scroll-target="#up">
          <span> with a Little Black Dress.</span>
        </Banners>
      </Container>
    </Section>
  );
};

export default Banner;
