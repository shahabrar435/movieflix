import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { fetchMovies } from "../common/commonUtils";
import { getGeners } from "../services/tmdbApi";

const Genres = (props) => {
  const { year, setMovies, setYear, isScroll, setIsLoading } = props;
 
  const [buttonPressed, setButtonPressed] = useState(null);
  const [genres, setGenres] = useState([]);

  

  useEffect(() => {
    fetchGeners()
  }, [])

  const fetchGeners = async () => {
    const response = await getGeners();
    const allGenre = { id: '', name: 'All' };
    const genres = [allGenre, ...response.data.genres];
    setGenres(genres)
  }

  const handlePress = async (genre) => {
    setYear(2012);
    setMovies([]);
    setButtonPressed((prevGenre) =>
      prevGenre === genre.name ? null : genre.name
    );
    await fetchMovies(year, genre.id, isScroll, setMovies, setIsLoading);
  };

  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.genreContainer}
        showsHorizontalScrollIndicator={false}
      >
        {genres?.map((genre, index) => (
          <Button
            key={index}
            mode="contained"
            style={[
              styles.genreButton,
              {
                backgroundColor:
                  buttonPressed === genre.name ? "#E50914" : "#808080",
              },
            ]}
            onPress={() => handlePress(genre)}
          >
            {genre.name}
          </Button>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  genreContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  genreButton: {
    marginRight: 8,
  },
});

export default Genres;
