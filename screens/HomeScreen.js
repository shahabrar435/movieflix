import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Genres from "../components/Genres";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { fetchMovies } from "../common/commonUtils";
import MovieList from "../components/MovieList";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(2012);
  const [isScroll, setIsScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMoviesList();
  }, [year]);

  const fetchMoviesList = async () => {
    await fetchMovies(year, null, isScroll, setMovies, setIsLoading);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          year={year}
          setMovies={setMovies}
          isScroll={isScroll}
          setIsLoading={setIsLoading}
        />
        <Genres
          year={year}
          setMovies={setMovies}
          setYear={setYear}
          isScroll={isScroll}
          setIsLoading={setIsLoading}
        />
        <MovieList
          year={year}
          movies={movies}
          setYear={setYear}
          setIsScroll={setIsScroll}
        />
        <Loader isLoading={isLoading} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303234",
  },
  year: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default HomeScreen;
