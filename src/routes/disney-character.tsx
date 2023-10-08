import { IDisneyApiResponse, getDisneyCharacters } from "../api";
import { Characters } from "../components/disney/characters";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/constants";

export const DisneyCharacter = () => {
  const { data } = useQuery<IDisneyApiResponse>(
    [QUERY_KEY.DISNEY],
    () => getDisneyCharacters(),
    {
      select: (response) => {
        const dataWithImage = response.filter(
          (item) =>
            item.imageUrl !== undefined &&
            !(item.imageUrl.includes("gif") || item.imageUrl.includes("jpg"))
        );
        return dataWithImage;
      },
    }
  );
  return <>{data && <Characters characters={data}></Characters>}</>;
};
