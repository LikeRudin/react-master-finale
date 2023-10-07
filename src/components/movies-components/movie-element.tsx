import { motion } from "framer-motion";
import styled from "styled-components";
import { memo } from "react";

interface MovieElementProps {
  backgroundPath: string;
  title: string;
  handleMovieClick: () => void;
  layoutId: string;
}

const Wrapper = styled(motion.div)<{ backgroundPath: string }>`
  height: 160px;
  width: 280px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.backgroundPath});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  border-radius: 10px;
`;

const WrapperVariants = {
  initial: { opacity: 0.9, scale: 1, border: "none" },
  hover: {
    opacity: 1,
    scale: 1.15,
    border: "solid white 3px",
    textShadow:
      "-2.2px 0px black, 0px 2.2px black, 2.2px 0px black, 0px -2.2px black",
  },
};
const Title = styled.span`
  font-size: x-large;
`;

const MovieElement = ({
  backgroundPath,
  title,
  handleMovieClick,
  layoutId,
}: MovieElementProps) => {
  const onClick = () => {
    handleMovieClick();
  };

  return (
    <>
      <Wrapper
        layoutId={layoutId}
        onClick={onClick}
        backgroundPath={backgroundPath}
        variants={WrapperVariants}
        initial="initial"
        whileHover="hover"
      >
        <Title>{title}</Title>
      </Wrapper>
    </>
  );
};

export default memo(MovieElement);
