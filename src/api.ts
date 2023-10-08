import { QUERY_KEY } from "./constants/constants";

const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

export function getMovieList(option: QUERY_KEY) {
  return fetch(`${BASE_URL}/${option}`).then((r) =>
    r.json().then((o) => o.results)
  );
}
export function getMovie(id: string) {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((r) => r.json());
}

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}

export function getDisneyCharacters() {
  return fetch("https://disney_api.nomadcoders.workers.dev/characters").then(
    (response) => response.json()
  );
}

export function getDisneyCharacterDetail(id: number) {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${id}`
  ).then((response) => response.json());
}

export const getMarvelHeros = async () => {
  const json = await (
    await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=100&orderBy=modified&series=24229,1058,2023`
    )
  ).json();
  return json.data.results;
};

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface EditedMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  genre_ids: string[];
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface IMovieDetail extends IMovie {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  homepage: string;
  genres: Genre[];
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IAPIResponse {
  page: number;
  results: IMovie[];
}

export interface IDisneyElement {
  id: number;
  name: string;
  imageUrl: string;
}
export type IDisneyApiResponse = IDisneyElement[];

export interface IMarvelElement {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: UrlElement[];
  comics: {
    items?: string[] | undefined;
  };
  series: {
    items?: string[] | undefined;
  };
  stories: object;
  events: object;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export type MarvelApiResponse = IMarvelElement[];

export interface UrlElement {
  type: string;
  url: string;
}
