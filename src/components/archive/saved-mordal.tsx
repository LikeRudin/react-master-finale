import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

import { useRecoilState } from "recoil";
import { ExtendedIContent, TextAreaSelector } from "../../atoms";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled(motion.div)`
  margin-top: 300px;
  width: 900px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  display: flex;
  padding: 20px;
  position: absolute;
  bottom: 10%;
`;
const InfoWrapper = styled.div`
  height: 90%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 45%;
`;
const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
const Name = styled.span`
  font-size: xxx-large;
  color: white;
`;
const SavedDate = styled.span`
  font-size: x-large;
  color: azure;
`;
const TextArea = styled.textarea`
  font-size: xx-large;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  width: 100%;
  height: 80%;
`;
const CloseButton = styled.button`
  width: 100px;
  height: 100px;
`;

interface SavedModalProps {
  modalData: ExtendedIContent;
  index: number;
  handleClose: () => void;
}
export const SavedModal = ({
  modalData,
  index,
  handleClose,
}: SavedModalProps) => {
  const [text, setText] = useRecoilState(TextAreaSelector({ index }));
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };
  return (
    <Overlay>
      <ModalWrapper layoutId={`saved${index}`}>
        <InfoWrapper>
          <Image src={modalData.ImagePath} />
          <Name>{modalData.name}</Name>
          <SavedDate>saved at: {modalData.savedDate}</SavedDate>
        </InfoWrapper>
        <ControlWrapper>
          <CloseButton onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0112 0v3"
              />
            </svg>
          </CloseButton>
          <TextArea value={text} onChange={onChange}></TextArea>
        </ControlWrapper>
      </ModalWrapper>
    </Overlay>
  );
};
