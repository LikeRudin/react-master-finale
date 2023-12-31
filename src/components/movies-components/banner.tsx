import styled from "styled-components";
import { motion } from "framer-motion";
import { LAYOUT_ID } from "../../constants/constants";
interface BannerProps {
  backgroundPath: string;
  posterPath: string;
  title: string;
  subTitle: string;
  genres: string;
  overview: string;
  score: number;
  clickMoreInfo: () => void;
}
const Wrapper = styled(motion.div)<{ backgroundPath: string }>`
  height 60vh;
  padding: 60px;
  background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)),
   url(${(props) => props.backgroundPath});
  background-size: cover;
  background-position: center center;`;

const InfoBox = styled.div`
  width: 900px;
  height: 700px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justfy-content: flex-start;
  align-items: flex-start;
  margin-top: 10vh;

  border-radius: 20px;
  color: white;
`;
const Title = styled.span`
  width: 800px;
  font-size: xxx-large;
`;

const Button = styled.button`
  width: 150px;
  font-size: x-large;
  border-radius: 15px;
  background-color: rgba(8, 2, 163, 0.4);
  color: white;
  &:hover {
    scale: 1.2;
  }
`;

const BelowBox = styled.div`
  width: 800px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  border-radius: 20px;
`;
const Overview = styled.span`
  font-size: xx-large;
`;

export const Banner = ({
  backgroundPath,
  subTitle,
  title,
  overview,
  clickMoreInfo,
}: BannerProps) => {
  return (
    <Wrapper backgroundPath={backgroundPath} layoutId={LAYOUT_ID.BOX}>
      <InfoBox>
        <Title>
          {title} {title !== subTitle ? `(${subTitle})` : null}
        </Title>
        <BelowBox>
          <Overview>
            {overview} <Button onClick={clickMoreInfo}>More Info</Button>
          </Overview>
        </BelowBox>
      </InfoBox>
    </Wrapper>
  );
};
