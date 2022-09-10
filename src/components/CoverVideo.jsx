import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.9)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 10px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.lg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const caption = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};
const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.30"
            data-scroll-speed="4">
            C
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.27"
            data-scroll-speed="4">
            r
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.24"
            data-scroll-speed="4">
            o
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.20"
            data-scroll-speed="4">
            w
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.17"
            data-scroll-speed="4">
            n
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.14"
            data-scroll-speed="4">
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.11"
            data-scroll-speed="4">
            d
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4">
            {" "}
            &nbsp;{" "}
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.07"
            data-scroll-speed="4">
            G
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4">
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4">
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4">
            r
          </motion.h1>
        </div>
        <motion.h2
          variants={caption}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2">
          Inspire. Create. Believe
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay loop muted />
    </VideoContainer>
  );
};

export default CoverVideo;
