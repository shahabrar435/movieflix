import axios from "axios";
import { TMDB_MOVIE_URL, TMDB_SEARCH_URL, TMDB_GENRE_URL } from "../constants";

export const getMovies = async (year, genre) => {
  const movies = await axios.get(
    `${TMDB_MOVIE_URL}&sort_by=popularity.desc&primary_release_year=${year}&with_genres=${genre}&page=1&vote_count.gte=100`
  );
  return movies;
};

export const getSearchedMovies = async (year, movieName) => {
  const searchedmovies = await axios.get(
    `${TMDB_SEARCH_URL}${movieName}&primary_release_year=${year}`
  );
  return searchedmovies;
};

export const getGeners = async () => {
  const geners = await axios.get(
    `${TMDB_GENRE_URL}`
  );
  return geners;
};
