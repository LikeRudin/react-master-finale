export const enum PATH {
  POPULAR = "/",
  NOWPLAYING = "/now-playing",
  COMINGSOON = "/coming-soon",
  DISNEY = "/disney",
  MARVEL = "/marvel",
  ARCHIVE = "/archive",
  SEARCH = "/search",
}

export const enum QUERY_KEY {
  POPULAR = "popular",
  NOWPLAYING = "now-playing",
  COMINGSOON = "coming-soon",
  DISNEY = "disney",
  MARVEL = "marvel",
  SEARCH = "search",
}

export const enum LAYOUT_ID {
  CIRCLE = "circle",
  BOX = "box",
}

export const movieGenreMap = new Map([
  [28, "Action"],
  [12, "Adventure"],
  [16, "Animation"],
  [35, "Comedy"],
  [80, "Crime"],
  [99, "Documentary"],
  [18, "Drama"],
  [10751, "Family"],
  [14, "Fantasy"],
  [36, "History"],
  [27, "Horror"],
  [10402, "Music"],
  [9648, "Mystery"],
  [10749, "Romance"],
  [878, "Science Fiction"],
  [10770, "TV Movie"],
  [53, "Thriller"],
  [10752, "War"],
  [37, "Western"],
]);
