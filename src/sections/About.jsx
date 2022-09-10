import React from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;
const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal">
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Back in 1999, many people were not opportune to get hold of the latest
        fashion item. Not because they don’t have the money, but access was
        limited. Fast forward to the introduction of the internet and eCommerce
        stores, getting hold of the latest fashion piece is just a click away.
        <br />
        <br />
        WHO WE ARE ? Crowned Gear is an established fashion store with a rich
        collection of high-quality clothing and accessories for men and women.
        We pride ourselves in innovative, culture-rich, and modern fits for you.
        Our services are top-notch and our designs are exquisite.
        <br />
        <br />
        OUR MISSION - is to contribute to the growth of fashion and style in
        Africa, and to continue to appreciate the fashion culture and values
        through our ambassadors and through each of our designs.
        <br />
        <br />
        OUR VISION - is to be the leading African Fashion company with Street
        wear brands that showcase Elegance and beauty in simplicity.
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          className="small-img-2"
          alt="About Us"
        />
      </Right>
    </Section>
  );
};

export default About;
