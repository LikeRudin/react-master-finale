import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface SavedProps {
  imagePath: string;
  name: string;
  handleClick: () => void;
  id: number;
  index: number;
}

const Wrapper = styled.div<{ isDragging: boolean }>`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isDragging ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.2)"};
  border-radius: 10px;
  margin-right: 20px;
`;
const Name = styled.span`
  font-size: xx-large;
  color: white;
`;
const Image = styled.img`
  max-width: 90%;
  width: auto;
  height: 300px;
  object-fit: contain;
  border: 1px solid black;
`;

export const Saved = ({
  imagePath,
  name,
  id,
  index,
  handleClick,
}: SavedProps) => {
  return (
    <Draggable draggableId={`${name}-${id}`} index={index}>
      {(provided, snapshot) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Image src={imagePath} onClick={handleClick} />
          <Name>{name}</Name>
        </Wrapper>
      )}
    </Draggable>
  );
};
