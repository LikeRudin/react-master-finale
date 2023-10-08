import { DisneyBanner } from "./disney-banner";
import styled from "styled-components";
import { IDisneyApiResponse, IDisneyElement } from "../../api";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  saveContentsToLocalStorage,
  contentsState,
  setContents,
} from "../../atoms";
import { SaveIcon } from "../header-components/icons";

const CharacterList = styled.div<{
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

interface CharactersProps {
  characters: IDisneyApiResponse;
}

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
const CharacterContainer = styled(motion.div)<{ backgroundPath: string }>`
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

const CharacterVariants = {
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

const CharacterName = styled(motion.span)`
  color: white;
`;

export const Characters = ({ characters }: CharactersProps) => {
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

  const handleSave = (characterData: IDisneyElement) => {
    const { name, imageUrl } = characterData;

    addContents((previousContents) => {
      const updatedContents = [
        {
          id: Date.now(),
          name,
          ImagePath: imageUrl,
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
      <DisneyBanner></DisneyBanner>
      <CharacterList height={height} onScroll={handleScroll}>
        <AnimatePresence>
          {characters.slice(10, visible).map((characterInfo) => {
            const { id, name, imageUrl } = characterInfo;
            return (
              <CharacterContainer
                variants={CharacterVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                key={`disney-${id}`}
                backgroundPath={imageUrl}
              >
                <CharacterName>{name}</CharacterName>
                <SaveButton onClick={() => handleSave(characterInfo)}>
                  <SaveIcon />
                </SaveButton>
              </CharacterContainer>
            );
          })}
        </AnimatePresence>
      </CharacterList>
    </>
  );
};
