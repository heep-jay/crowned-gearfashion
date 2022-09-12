import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;
  a {
    display: flex;
    align-items: flex-end;
  }
  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  padding-bottom: 0.7rem;
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none">
          <g></g>
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 6.09131L7.21997 10.8113L12.0005 6.03076L16.7811 10.8113L21.5 6.09233V14.969C21.5 16.6259 20.1569 17.969 18.5 17.969H5.5C3.84314 17.969 2.5 16.6259 2.5 14.969V6.09131ZM19.5 10.9086V14.969C19.5 15.5212 19.0523 15.969 18.5 15.969H5.5C4.94771 15.969 4.5 15.5212 4.5 14.969V10.9076L7.21997 13.6276L12.0005 8.84705L16.7811 13.6276L19.5 10.9086Z"
            />
          </g>
        </svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          CG
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
