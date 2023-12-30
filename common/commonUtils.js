import { getMovies, getSearchedMovies } from "../services/tmdbApi";

const fetchMoviesData = async (
  getDataFunction,
  year,
  parameter,
  isScroll,
  setMovies,
  setIsLoading
) => {
  try {
    setIsLoading(true);
    const response = await getDataFunction(year, parameter);
    const fetchedMovies = response.data.results;
    setMovies((prevMovies) =>
      isScroll ? [...prevMovies, ...fetchedMovies] : fetchedMovies
    );
  } catch (error) {
    handleFetchError(error);
  } finally {
    setIsLoading(false);
  }
};

const handleFetchError = (error) => {
  console.error("Error fetching movies:", error);
};

export const fetchMovies = async (
  year,
  genreId,
  isScroll,
  setMovies,
  setIsLoading
) => {
  await fetchMoviesData(
    getMovies,
    year,
    genreId,
    isScroll,
    setMovies,
    setIsLoading
  );
};

export const fetchSearchedMovies = async (
  year,
  movieName,
  isScroll,
  setMovies,
  setIsLoading
) => {
  await fetchMoviesData(
    getSearchedMovies,
    year,
    movieName,
    isScroll,
    setMovies,
    setIsLoading
  );
};
