import { IMovie, makeBgPath, makeImagePath, EditedMovie } from "../../api";
import styled from "styled-components";
import { movieGenreMap } from "../../constants/constants";
import { useState } from "react";
import { Banner } from ".";
import MovieElement from "./movie-element";
import { motion, AnimatePresence } from "framer-motion";
import { MovieModal } from "./modal";
import { useLocation } from "react-router-dom";
import { LeftIcon, RightIcon } from "../header-components/icons";

interface MoviesProps {
  movies: IMovie[];
}
const Wrapper = styled.div`
  background: black;
  padding-bottom: 150px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 10px;
`;
const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Slider = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  z-index: 55;
  background-color: rgba(8, 2, 163, 0.4);
  &:hover {
    cursor: pointer;
  }
`;

const MovieList = styled(motion.div)`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  bottom: 0.5%;
  width: 100%;
`;

const sliderVariants = {
  hidden: (direction: number) => ({
    x: (window.innerWidth / 5) * direction,
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
    x: -(window.innerWidth / 5) * direction,
    transition: { type: "tween", duration: 0.5 },
    zIndex: 1,
    opacity: 1,
  }),
};

export const Movies = ({ movies }: MoviesProps) => {
  const moviesData = movies.map<EditedMovie>((item) => {
    const genres = item.genre_ids.map((id) => movieGenreMap.get(id));
    return { ...item, genre_ids: genres } as EditedMovie;
  });

  const [bannerData, setBannerData] = useState(moviesData[0]);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [index, setIndex] = useState(0);
  const { pathname } = useLocation();

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleMovieClick = (movie: EditedMovie) => {
    setBannerData(movie);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };
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
              clickMoreInfo={() => handleMovieClick(bannerData)}
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

        <ButtonBox>
          <Button onClick={() => changeIndex(-1)}>
            <LeftIcon />
          </Button>
          <Button onClick={() => changeIndex(1)}>
            <RightIcon />
          </Button>
        </ButtonBox>
        <SliderWrapper>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <MovieList
                key={`${index}`}
                variants={sliderVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={direction}
              >
                {rowSelector(5).map((movie, index) => {
                  const { backdrop_path, title, id } = movie;
                  return (
                    <MovieElement
                      layoutId={`${pathname}-${id}`}
                      key={`${index}-${id}`}
                      handleMovieClick={() => handleMovieClick(movie)}
                      backgroundPath={String(makeBgPath(backdrop_path))}
                      title={title}
                    />
                  );
                })}
              </MovieList>
            </AnimatePresence>
          </Slider>
        </SliderWrapper>
        {isModalOpened && (
          <MovieModal
            preloaded={bannerData}
            layoutId={`${pathname}-${bannerData.id}`}
            handleRedirect={closeModal}
          />
        )}
      </Wrapper>
    </>
  );
};
