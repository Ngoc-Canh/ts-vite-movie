const mediaType = {
  movie: "movie",
  tv: "tv",
  all: "all",
};

const timeWindow = {
  day: "day",
  week: "week",
};

const mediaCategory = {
  trending: "trending",
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
};

const backdropPath = (imgEndpoint: String) =>
  `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint: String) =>
  `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

const youtubePath = (videoId: String) =>
  `https://www.youtube.com/embed/${videoId}?controls=0`;

const tmdbConfig = {
  mediaType: mediaType,
  mediaCategory: mediaCategory,
  backdropPath: backdropPath,
  timeWindow: timeWindow,
  posterPath: posterPath,
  youtubePath: youtubePath,
};

export default tmdbConfig;
