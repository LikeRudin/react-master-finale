import { motion } from "framer-motion";
import styled from "styled-components";
import { memo } from "react";
interface MovieElementProps {
  backgroundPath: string;
  posterPath: string;
  title: string;
  subTitle: string;
  genres: string;
  overview: string;
  score: number;
}

const MovieVariants = {};

const Wrapper = styled.div<{ backgroundPath: string }>`
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
`;
const Title = styled.span`
  font-size: x-large;
`;

const MovieElement = ({
  backgroundPath,
  posterPath,
  title,
  subTitle,
  genres,
  overview,
  score,
}: MovieElementProps) => {
  return (
    <Wrapper backgroundPath={backgroundPath}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default memo(MovieElement);
