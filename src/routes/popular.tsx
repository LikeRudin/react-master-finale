import { getMovieList, IMovie } from "../api";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/constants";
import { Movies } from "../components/movies-components/movies";
export const Popular = () => {
  const { data } = useQuery<IMovie[]>([QUERY_KEY.POPULAR], () =>
    getMovieList(QUERY_KEY.COMINGSOON)
  );
  return <>{data ? <Movies movies={data}></Movies> : null}</>;
};
