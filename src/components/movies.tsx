import { IMovie, makeBgPath, makeImagePath } from "../api";
import styled from "styled-components";
import { movieGenreMap } from "../constants/constants.ts";
import { useState } from "react";
import { Banner } from "./movies-components";
import MovieElement from "./movies-components/movie-element.tsx";
import { motion, AnimatePresence } from "framer-motion";

interface MoviesProps {
  movies: IMovie[];
}
const Wrapper = styled.div`
  background: black;
  padding-bottom: 150px;
`;
const SliderWrapper = styled.div`
  display: flex;
  justfy-content: space-around;
  align-items: center;
`;

const Slider = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const Button = styled.button`
  width: 5%;
  height: auto;
`;

const MovieList = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  width: 1500px;
`;

const sliderVariants = {
  hidden: (direction: number) => ({
    x: 301.5 * direction,
    zIndex: 1,
    opacity: 0.5,
  }),
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.5 },
    zIndex: 2,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: -301.5 * direction,
    transition: { type: "tween", duration: 0.5 },
    zIndex: 1,
    opacity: 1,
  }),
};

export const Movies = ({ movies }: MoviesProps) => {
  const moviesData = movies.map((item) => {
    const genres = item.genre_ids.map((id) => movieGenreMap.get(id));
    return { ...item, genre_ids: genres };
  });

  const [bannerData, setBannerData] = useState(moviesData[0]);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const [direction, setDirection] = useState<1 | -1>(1);

  const [index, setIndex] = useState(0);

  const changeIndex = (dir: 1 | -1) => {
    if (leaving) {
      return;
    }
    toggleLeaving();
    const rightLimit = moviesData.length - 2;
    if (dir) {
      setIndex((prev) => (prev === rightLimit ? 0 : prev + dir));
    } else {
      setIndex((prev) => (prev === 0 ? rightLimit : prev + dir));
    }
    setDirection(dir);
  };

  const rowSelector = (rows_number: number) => {
    const offset = rows_number;
    const moviesWithOutBanner = moviesData.filter(
      (movie) => movie.id !== bannerData.id
    );
    let viewList = moviesWithOutBanner.slice(index, index + offset);
    if (viewList.length < offset) {
      viewList = [
        ...viewList,
        ...moviesWithOutBanner.slice(0, offset - viewList.length),
      ];
    }
    return viewList;
  };

  // const ChangeBanner = () => {
  //   setBannerData();
  // };

  return (
    <>
      <Wrapper>
        {(() => {
          const {
            poster_path,
            backdrop_path,
            title,
            genre_ids,
            overview,
            original_title,
            vote_average,
          } = bannerData;
          return (
            <Banner
              backgroundPath={String(makeBgPath(backdrop_path))}
              posterPath={makeImagePath(poster_path)}
              title={title}
              subTitle={original_title}
              genres={genre_ids.join(", ")}
              overview={overview}
              score={vote_average}
            />
          );
        })()}
        <SliderWrapper>
          <Button onClick={() => changeIndex(-1)}>Left</Button>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <MovieList
                key={index}
                variants={sliderVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={direction}
              >
                {rowSelector(5).map((movie) => {
                  const {
                    poster_path,
                    backdrop_path,
                    title,
                    genre_ids,
                    overview,
                    original_title,
                    vote_average,
                  } = movie;
                  return (
                    <MovieElement
                      backgroundPath={String(makeBgPath(backdrop_path))}
                      posterPath={makeImagePath(poster_path)}
                      title={title}
                      subTitle={original_title}
                      genres={genre_ids.join(", ")}
                      overview={overview}
                      score={vote_average}
                    />
                  );
                })}
              </MovieList>
            </AnimatePresence>
          </Slider>
          <Button onClick={() => changeIndex(1)}>Right</Button>
        </SliderWrapper>
      </Wrapper>
    </>
  );
};
