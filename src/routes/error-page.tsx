import styled from "styled-components";
import { useRouteError, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeButton = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: xxx-large;
  font-weight: bold;
`;

const Image = styled(motion.img)`
  width: 400px;
  height: 400px;
  border-radius: 200px;
`;
const ImageVariants = {
  animate: {
    scale: [1, -1, 1],
    transition: { duration: 5, delay: 2, repeat: Infinity },
  },
  hover: { scale: 1.1, rotate: Math.random() * 360 },
  tap: {
    scale: 3,
    roateZ: 180,
    x: [0, Math.random() * window.innerWidth, window.innerWidth],
    y: [0, Math.random() * window.innerHeight, window.innerHeight],
    duration: 2,
  },
};
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const ShockedScream = styled.span`
  font-size: xxx-large;
`;
const ErrorText = styled.span`
  font-size: x-large;
  color: white;
`;

interface ErrorInterface {
  statusText: string;
  message: string;
  name: string;
}

export const ErrorPage = () => {
  const error = useRouteError() as ErrorInterface;
  console.error({ error });

  return (
    <>
      <Wrapper id="error-page">
        <AnimatePresence>
          <ImageBox>
            <Image
              variants={ImageVariants}
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              src="https://media.discordapp.net/attachments/1129327737035837500/1142434281021517874/IMG_1358.png?ex=6533c355&is=65214e55&hm=806e1ec67523b74cfeec888ba3f6d1a5228ca560f4c672fe9f0718428e0ef230&=&width=670&height=670"
            />
          </ImageBox>
          <InfoWrapper>
            <ShockedScream>Oh~ NO!</ShockedScream>
            <ErrorText>
              Unexpected {`${error.name}`} Occured! <br />{" "}
              <i>
                {error.statusText} {error.message}
              </i>
            </ErrorText>
            <br />
            <HomeButton to={`/`}> Press to Go Home</HomeButton>
            <ErrorText>"illustrations were drawn by Ddoza."</ErrorText>
          </InfoWrapper>
          <ImageBox>
            <Image
              variants={ImageVariants}
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              src="https://media.discordapp.net/attachments/1129327737035837500/1142434550048366612/KakaoTalk_20230718_202443979_03.png?ex=6533c396&is=65214e96&hm=b81e77fde054ae0abf9a6adb9f9b10b28902711929e1eaa783a56d3bca908757&=&width=670&height=670"
            />
          </ImageBox>
        </AnimatePresence>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
