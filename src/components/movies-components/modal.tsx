import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { EditedMovie, IMovieDetail, getMovie } from "../../api";
import { makeBgPath, makeImagePath } from "../../api";
import ScoreChart from "./score-chart";
import { motion } from "framer-motion";
import { LAYOUT_ID } from "../../constants/constants";
import { useState } from "react";

interface MovieModalProps {
  preloaded: EditedMovie;
  layoutId: string;
  handleRedirect: () => void;
}
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
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
`;

const Header = styled(motion.div)<{ backgroundPath: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)),
    url(${(props) => props.backgroundPath});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  height: 30%;
`;
const HeaderInfoBox = styled.div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-weight: bold;
`;
const Title = styled.span`
  font-size: x-large;
`;
const Countries = styled.span``;
const ScoreBox = styled.div`
  position: relative;
`;
const ScoreBoxSpan = styled.span`
  position: absolute;
  top: 1%;
  left: 25%;
  font-size: x-large;
  color: tomato;
  z-index: 1;
`;
const Poster = styled.img`
  height: 300px;
  right: 0;
`;
const Runtime = styled.span``;
const Genres = styled.span``;

const Body = styled.div`
  width: 100%;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Overview = styled.div`
  font-size: x-large;
  height: 40%;
`;
const BodyInfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40%;
  overflow-x: auto;
`;

const WebLink = styled.a`
  display: block;
  text-decoration: none;
  color: #0802a3;
  font-weight: bold;
  font-size: xxx-large;
  text-shadow: -2.2px 0px white, 0px 2.2px white, 2.2px 0px white,
    0px -2.2px white;
  transform-origin: left;
  &:hover {
    transform: scale(1.5);
  }
`;

const CompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 200px;
  width: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-left: 5px;
  position: relative;
`;
const ImageWrapper = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const CompanyImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const NameIfNoImage = styled.p`
  font-size: xx-large;
`;
const Span = styled.span`
  font-size: large;
  position: absolute;
  bottom: 2%;
`;

export const MovieModal = ({
  preloaded,
  handleRedirect,
  layoutId,
}: MovieModalProps) => {
  const { backdrop_path, id, original_title, genre_ids, poster_path, title } =
    preloaded;
  const { data, isLoading } = useQuery<IMovieDetail>(["movie", `${id}`], () =>
    getMovie(`${id}`)
  );

  const [isClicked, setIsClicked] = useState(false);

  const goBack = () => {
    if (isClicked) {
      handleRedirect();
    } else {
      setIsClicked(true);
    }
  };

  return (
    <Overlay onClick={goBack}>
      <ModalWrapper layoutId={isClicked ? LAYOUT_ID.BOX : layoutId}>
        <Header
          initial={false}
          backgroundPath={makeBgPath(backdrop_path)}
          transition={{ type: "tween" }}
        >
          <Poster src={makeImagePath(poster_path)} />
          <HeaderInfoBox>
            <Title>
              {title} {title !== original_title ? original_title : null}
            </Title>
            <Genres>{genre_ids.join(", ")}</Genres>
            <Runtime>Runtime: {data?.runtime} min</Runtime>
            <Countries>
              Published
              {data?.production_countries.map((country, index) => {
                return (
                  <li key={`company-${index}-${id}`}>
                    ({country.iso_3166_1}) {country.name}
                  </li>
                );
              })}
            </Countries>
          </HeaderInfoBox>
          <ScoreBox>
            {isLoading ? null : (
              <>
                <ScoreBoxSpan>영진 Meta Score</ScoreBoxSpan>
                <ScoreChart movieDetail={data as IMovieDetail} />
              </>
            )}
          </ScoreBox>
        </Header>
        <Body>
          <Overview>
            {data?.overview ? "Overview" : null}
            <br />
            <br />
            {data?.overview}
            <WebLink href={data?.homepage}>More Detail</WebLink>
          </Overview>
          <BodyInfoBox>
            {data?.production_companies.map((company) => {
              const { name, origin_country, logo_path } = company;
              return (
                <CompanyBox>
                  {logo_path ? (
                    <ImageWrapper>
                      <CompanyImage src={makeImagePath(logo_path)} />
                    </ImageWrapper>
                  ) : (
                    <NameIfNoImage>{name}</NameIfNoImage>
                  )}
                  <Span>
                    {name} company in {origin_country}
                  </Span>
                </CompanyBox>
              );
            })}
          </BodyInfoBox>
        </Body>
      </ModalWrapper>
    </Overlay>
  );
};
