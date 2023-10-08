import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useEffect } from "react";
import { loadContentsFromLocalStorage, contentsState } from "../atoms";
import { useRecoilState } from "recoil";
import { Saved } from "../components/archive/saved";

const Wrapper = styled(DragDropContext)`
  height: 80vh;
  width: auto;
`;
const DropSpace = styled.div<{ isDraggingOver: boolean }>`
  height: 60vh;
  width: 100%;
  background-color: ${(props) =>
    props.isDraggingOver ? "#D6CC99" : "#001524"};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px; /
  gap: 10px; 
  overflow-x: auto; 
  width: 100%; 
`;
const TrashZone = styled.div<{ isDraggingOver: boolean }>`
  height: 20vh;
  width: 100%;
  background-color: ${(props) =>
    props.isDraggingOver ? "#D83F31" : "#B4B4B3"};
`;
export const Archive = () => {
  const [contentList, setContentList] = useRecoilState(contentsState);

  useEffect(() => {
    const contents = loadContentsFromLocalStorage();
    if (contents) {
      setContentList(contents);
    }
  }, []);
  const onDragEnd = () => {
    console.log("drag finishied");
  };
  return (
    <>
      <Wrapper onDragEnd={onDragEnd}>
        <Droppable droppableId="main">
          {(provided, snapshot) => {
            return (
              <DropSpace
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {contentList.map((content) => (
                  <Saved
                    key={`saved-${content.id}`}
                    id={content.id}
                    comment={content.comment}
                    imagePath={content.ImagePath}
                    name={content.name}
                  ></Saved>
                ))}
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
              ></TrashZone>
            );
          }}
        </Droppable>
      </Wrapper>
    </>
  );
};
