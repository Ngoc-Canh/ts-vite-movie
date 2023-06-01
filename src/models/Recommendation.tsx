export interface ListResult {
  adult: boolean;
  backdrop_path?: any;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path?: any;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Recommendation {
  page: number;
  results: ListResult[];
  total_pages: number;
  total_results: number;
}
