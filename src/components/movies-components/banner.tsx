import styled from "styled-components";

interface BannerProps {
  backgroundPath: string;
  posterPath: string;
  title: string;
  subTitle: string;
  genres: string;
  overview: string;
  score: number;
}
const Wrapper = styled.div<{ backgroundPath: string }>`
  height 100vh;
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

const Button = styled.button``;

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
  posterPath,
  backgroundPath,
  subTitle,
  title,
  genres,
  overview,
  score,
}: BannerProps) => {
  return (
    <Wrapper backgroundPath={backgroundPath}>
      <InfoBox>
        <Title>
          {title} ({subTitle})
        </Title>
        <BelowBox>
          <Overview>
            {overview} <Button>More Info</Button>
          </Overview>
        </BelowBox>
      </InfoBox>
    </Wrapper>
  );
};
