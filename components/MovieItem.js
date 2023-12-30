import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MovieCard from "./MovieCard";

const MovieItem = (props) => {
  const { item, index } = props;

  return (
    <View>
      {index % 20 === 0 && (
        <View style={styles.yearView}>
          <Text style={styles.year}>{item.release_date.substring(0, 4)}</Text>
        </View>
      )}
      <View style={styles.movieCardView}>
        <MovieCard uri={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yearView: {
    marginBottom: -25,
    paddingHorizontal: 16,
  },
  year: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  movieCardView: {
    marginTop: 20,
    marginBottom: 8,
  },
});

export default MovieItem;
