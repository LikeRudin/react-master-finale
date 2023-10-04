import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { LAYOUT_ID } from "../../constants/constants";
import { Link } from "react-router-dom";

const Item = styled(Link)`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const SpanBar = styled(motion.span)`
  width: 100%;
  margin-top: 3px;
  height: 2px;
  background-color: white;
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span``;
const Icon = styled.span`
  margin-left: 2px;
  margin-top: 6px;
  width: 30px;
  height: 30px;
`;

const SpanBarVariants = {
  initial: { opacity: 0, scale: 0 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Circle = styled(motion.span)`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  bottom: -5px;
  margin-top: 5px;
  background-color: ${(props) => props.theme.red};
`;
interface PageLinkProps {
  text: string;
  path: string;
  match: boolean;
  icon: () => JSX.Element;
}

export const PageLink = ({ path, match, text, icon }: PageLinkProps) => {
  const [isLinkHover, setIsLinkHover] = useState(false);
  const handleHover = () => {
    setIsLinkHover((hover) => !hover);
  };
  return (
    <Item to={path} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <TextWrapper>
        {isLinkHover && <Icon>{icon()}</Icon>}
        <Span>{text}</Span>
      </TextWrapper>
      <SpanBar
        variants={SpanBarVariants}
        initial="initial"
        animate={isLinkHover ? "hover" : "initial"}
      ></SpanBar>
      {match && <Circle layoutId={LAYOUT_ID.CIRCLE} />}
    </Item>
  );
};
