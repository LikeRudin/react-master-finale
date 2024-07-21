import { useEffect, useState } from "react";
import {  useSetRecoilState } from "recoil";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

import {
  loadContentsFromLocalStorage,
  contentsState,
  saveContentsToLocalStorage,
  getContents,
} from "../atoms";

import { SavedModal } from "../components/archive/saved-mordal";
import { Saved } from "../components/archive/saved";

import styled from "styled-components";


const Wrapper = styled(DragDropContext)`
  height: 80vh;
  width: auto;
`;
const DropSpace = styled.div<{ isDraggingOver: boolean }>`
  height: 60vh;
  width: 100%;
  background-color: ${(props) =>
    props.isDraggingOver ? "#D6CC99" : "#001524"};
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  align-items: center;
`;
const TrashZone = styled.div<{ isDraggingOver: boolean }>`
  height: 20vh;
  width: 100%;
  background-color: ${(props) =>
    props.isDraggingOver ? "#D83F31" : "#B4B4B3"};
`;
export const Archive = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const contentList = getContents();
  const setContentList = useSetRecoilState(contentsState);
  const handleSavedClick = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpened(true);
  };
  const closeModal = () => setIsModalOpened(false);

  useEffect(() => {
    const contents = loadContentsFromLocalStorage();
    if (contents) {
      setContentList(contents);
    }
  }, []);
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) {
      return;
    }
    console.log(destination?.droppableId);
    if (source.droppableId === destination.droppableId) {
      setContentList((oldContents) => {
        const newData = JSON.parse(JSON.stringify(oldContents));
        const [target] = newData.splice(source.index, 1);
        newData.splice(destination.index, 0, target);
        saveContentsToLocalStorage(newData);
        return newData;
      });
    }
    if (destination.droppableId === "trash") {
      setContentList((oldContents) => {
        const newData = JSON.parse(JSON.stringify(oldContents));
        newData.splice(source.index, 1);
        saveContentsToLocalStorage(newData);
        return newData;
      });
    }
  };
  return (
    <>
      <Wrapper onDragEnd={onDragEnd}>
        <Droppable droppableId="main" direction="horizontal">
          {(provided, snapshot) => {
            return (
              <DropSpace
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {contentList.map((content, index) => (
                  <Saved
                    key={`saved-${content.id}`}
                    id={content.id}
                    imagePath={content.ImagePath}
                    name={content.name}
                    index={index}
                    handleClick={() => handleSavedClick(index)}
                  ></Saved>
                ))}
                {provided.placeholder}
              </DropSpace>
            );
          }}
        </Droppable>
        <Droppable droppableId="trash">
          {(trashProvided, trashSnapShot) => {
            return (
              <TrashZone
                ref={trashProvided.innerRef}
                {...trashProvided.droppableProps}
                isDraggingOver={trashSnapShot.isDraggingOver}
              >
                {trashProvided.placeholder}
              </TrashZone>
            );
          }}
        </Droppable>
      </Wrapper>
      {isModalOpened && (
        <SavedModal
          modalData={contentList[selectedIndex]}
          index={selectedIndex}
          handleClose={closeModal}
        />
      )}
    </>
  );
};
