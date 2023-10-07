import { IMovieDetail } from "./api";

const makeRevenueScore = (budget: number, revenue: number) => {
  if (budget === 0 && revenue === 0) {
    return 2.5;
  }
  const revenueRatio = revenue / budget;
  const score = Math.floor(10 * Math.pow(revenueRatio, 0.5)) / 10;
  const scoreWithLimit = Math.min(10, score);
  return scoreWithLimit / 2;
};

const makeLanguageScore = (
  spoken_languages: IMovieDetail["spoken_languages"]
) => {
  return Math.min(spoken_languages.length * 2, 10) / 2;
};

const makePopularityScore = (popularity: number) => {
  const score = Math.floor((popularity / 4000) * 100) / 10;
  return Math.min(score, 10) / 2;
};

const makeRuntimeScore = (runtime: number) => {
  const score = Math.floor(((runtime - 70) / 5) * 10) / 10;
  return Math.min(score, 10) / 2;
};

const makeVoteScore = (vote_average: number) => {
  return Math.floor(vote_average * 10) / 20;
};

export const getScoreForChart = (
  budget: number,
  revenue: number,
  runtime: number,
  popularity: number,
  vote_average: number,
  spoken_languages: IMovieDetail["spoken_languages"]
): number[] => {
  const scores = [
    makeVoteScore(vote_average),
    makeRuntimeScore(runtime),

    makeRevenueScore(budget, revenue),
    makePopularityScore(popularity),

    makeLanguageScore(spoken_languages),
  ];
  return scores;
};

export const getEverageScore = (scores: number[]) => {
  return (
    Math.floor(
      (scores.reduce((acc, cur) => acc + cur, 0) / scores.length) * 10
    ) / 10
  );
};
