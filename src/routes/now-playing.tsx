import { getMovieList, IMovie } from "../api";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/constants";
import { Movies } from "../components/movies-components/movies";
export const NowPlaying = () => {
  const { data } = useQuery<IMovie[]>([QUERY_KEY.NOWPLAYING], () =>
    getMovieList(QUERY_KEY.NOWPLAYING)
  );
  return (
    <>
      <>{data ? <Movies movies={data}></Movies> : null}</>;
    </>
  );
};
