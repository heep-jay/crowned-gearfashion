import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";

const Section = styled.section`
  position: relative;
  height: auto;
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 6;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;

  /* padding: 20px; */
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.grey};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    width: fit-content;
  }
`;

const Product = ({ img, title = " " }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          markers: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          markers: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        New Collection
      </Title>
      <Left>
        <p>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products. All products are made
          using the best materials, from the finest cotton to the finest
          fabrics.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well. It is great for us to carry our new clothes all around the
          country and look different.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Product img={img1} title="Men Basics" />
        <Product img={img2} title="Women Basics" />
        <Product img={img3} title="Hats" />
        <Product img={img4} title="Sweatshirts" />
        <Product img={img5} title="Blazers" />
        <Product img={img6} title="Suits" />
        <Product img={img7} title="Antiques" />
        <Product img={img8} title="Jewelries" />
      </Right>
    </Section>
  );
};

export default Shop;
