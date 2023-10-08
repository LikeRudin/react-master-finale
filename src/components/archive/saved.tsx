import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface SavedProps {
  imagePath: string;
  name: string;
  comment: string;
  id: number;
}

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
`;
const Name = styled.span``;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const Comment = styled.textarea``;

export const Saved = ({ imagePath, name, comment, id }: SavedProps) => {
  return (
    <Draggable draggableId={`${name}-${id}`}>
      {(provided, snpashot) => (
        <Wrapper
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Image src={imagePath} />
          <Name>{name}</Name>
          <Comment>{comment}</Comment>
        </Wrapper>
      )}
    </Draggable>
  );
};
