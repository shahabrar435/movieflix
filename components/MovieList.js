import React from "react";
import { View, FlatList } from "react-native";
import MovieItem from "./MovieItem";

const MovieList = (props) => {
  const { year, movies, setYear, setIsScroll } = props;

  const handleOnEndReach = async () => {
    setYear(year + 1);
    setIsScroll(true);
  };

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={MovieItem}
        onEndReached={handleOnEndReach}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default MovieList;
