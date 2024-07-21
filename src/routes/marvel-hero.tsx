import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/constants";

import { getMarvelHeros, MarvelApiResponse } from "../api";
import { Heros } from "../components/marvel/heros";

export const MarvelHero = () => {
  const { data } = useQuery<MarvelApiResponse>(
    [QUERY_KEY.MARVEL],
    () => getMarvelHeros(),
    {
      select: (response) => {
        const dataWithImage = response.filter((item) => {
          const ImagePath = item.thumbnail?.path;
          return ImagePath && !ImagePath.includes("not_available");
        });
        return dataWithImage;
      },
    }
  );
  return <>{data && <Heros heros={data}></Heros>}</>;
};
