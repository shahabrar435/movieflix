import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TMDB_IMAGE_URL } from "../constants";

const MovieCard = (props) => {
  const { uri } = props;
  return (
    <View style={styles.imageView}>
      <Image
        style={styles.image}
        source={{ uri: `${TMDB_IMAGE_URL}${uri.poster_path}` }}
      />
      <Text style={styles.title}>
        {uri.title.length > 14 ? uri.title.slice(0, 14) + "..." : uri.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    marginTop: 8,
    flex: 1,
    paddingHorizontal: 8,
  },
  image: {
    width: 170,
    height: 250,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 5,
  },
  title: {
    color: "#FFFFFF",
    paddingHorizontal: 4,
    marginTop: 8,
  },
});

export default MovieCard;
