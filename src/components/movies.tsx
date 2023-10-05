import { IMovie, makeBgPath, makeImagePath } from "../api";
import styled from "styled-components";
import { movieGenreMap } from "../constants/constants";

interface MoviesProps {
  movies: IMovie[];
}
const Wrapper = styled.div`
  background: black;
  padding-bottom: 150px;
`;
const Banner = styled.div<{ backGround: string }>`
  height 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)),
   url(${(props) => props.backGround});
  background-size: cover;
  background-position: center center;
`;
const BannerTitle = styled.span``;
const BannerOverview = styled.span``;
const GenreSpan = styled.span``;
const BannerButton = styled.button``;
const MovieList = styled.div``;
const MovieElement = styled.div``;

export const Movies = ({ movies }: MoviesProps) => {
  const [bannerData, listData] = movies.map((item) => {
    const genres = item.genre_ids.map((id) => movieGenreMap.get(id));
    return { ...item, genre_ids: genres };
  });
  console.log("bannerMovie");
  console.log(bannerData);
  console.log(makeImagePath(bannerData.backdrop_path));

  return (
    <>
      <Wrapper>
        <Banner backGround={makeBgPath(bannerData.backdrop_path)}>
          <BannerTitle>{bannerData.original_title}</BannerTitle>
          <BannerButton>More Info</BannerButton>
          <GenreSpan>{bannerData.genre_ids.join(", ")}</GenreSpan>
          <BannerOverview>{bannerData.overview}</BannerOverview>
        </Banner>
        <MovieList>
          <MovieElement></MovieElement>
        </MovieList>
      </Wrapper>
    </>
  );
};
