import styled from "styled-components";
import { MarvelBanner } from "./marvel-banner";
import { IMarvelElement, MarvelApiResponse } from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { SaveIcon } from "../header-components/icons";
import { setContents, saveContentsToLocalStorage } from "../../atoms";

const HeroList = styled.div<{
  height: number;
}>`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-auto-rows: auto;
  bottom: 0.5%;
  width: 100%;
  height: ${(props) => String(props.height) + "vh"};
  background-color: ${(props) => {
    const opacity = Math.min(Math.pow(props.height / 250, 4) * 50, 1);
    return `rgba(0, 0, 0, ${opacity})`;
  }};
  position: absolute;
  overflow-x: auto;
  padding: 0 50px;
  position: absolute;
  bottom: 5%;
  transition: top 1.5 ease-in-out;
`;
const SaveButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  opacity: 0;
  &:hover {
    scale: 1.1;
    color: tomato;
  }
`;

const HeroContainer = styled(motion.div)<{ backgroundPath: string }>`
  margin-top: 50px;
  background-image: url(${(props) => props.backgroundPath});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 125px;
  &:hover {
    button {
      opacity: 1;
    }
  }
`;

const HeroVariants = {
  initial: { fontSize: "0", opacity: 0, scale: 0 },
  animate: { fontSize: "x-large", opacity: 1, scale: 1 },
  transition: { delay: 0.3, duration: 0.5 },
  hover: {
    scale: 1.2,
    border: "4px solid white",
    borderRadius: "0",
    fontSize: "xxx-large",
    justifyContent: "flex-start",
    textShadow:
      "-2.2px 0px black, 0px 2.2px black, 2.2px 0px black, 0px -2.2px black",
  },
};

const HeroName = styled(motion.span)`
  color: white;
`;

interface HerosProps {
  heros: MarvelApiResponse;
}
export const Heros = ({ heros }: HerosProps) => {
  const addContents = setContents();
  const [height, setHeight] = useState(50);
  const [visible, setVisible] = useState(20);

  const offset = 20;

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    const newHeight = Math.min(45 + scrollRatio * 500, 82.5);
    setHeight(newHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
      setVisible((prev) => prev + offset);
    }
  };

  const handleSave = (heroData: IMarvelElement) => {
    const {
      name,
      thumbnail: { path, extension },
    } = heroData;

    addContents((previousContents) => {
      const updatedContents = [
        {
          id: Date.now(),
          name,
          ImagePath: `${path}.${extension}`,
          comment: "save your comment",
        },
        ...previousContents,
      ];
      saveContentsToLocalStorage(updatedContents);
      return updatedContents;
    });
  };
  return (
    <>
      <MarvelBanner></MarvelBanner>
      <HeroList height={height} onScroll={handleScroll}>
        <AnimatePresence>
          {heros.slice(0, visible).map((heroData) => (
            <HeroContainer
              variants={HeroVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              key={`marvel-${heroData.id}`}
              backgroundPath={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`}
            >
              <HeroName>{heroData.name}</HeroName>
              <SaveButton onClick={() => handleSave(heroData)}>
                <SaveIcon />
              </SaveButton>
            </HeroContainer>
          ))}
        </AnimatePresence>
      </HeroList>
    </>
  );
};
