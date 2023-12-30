import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { fetchMovies, fetchSearchedMovies } from "../common/commonUtils";

const Header = (props) => {
  const { year, setMovies, isScroll, setIsLoading } = props;
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearchMovies = (text) => {
    setSearchMovie(text);
    if (text.length <= 2) {
      fetchMovies(year, null, isScroll, setMovies, setIsLoading);
    } else {
      fetchSearchedMovies(year, text, isScroll, setMovies, setIsLoading);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.appName}>Movie Flix</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          outlineColor="#808080"
          activeOutlineColor="#808080"
          placeholder="Search"
          value={searchMovie}
          onChangeText={handleSearchMovies}
          right={<TextInput.Icon icon="magnify" style={styles.searchIcon} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  appName: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  searchContainer: {
    paddingHorizontal: 8,
  },
  textInput: {
    height: 40,
  },
  searchIcon: {
    marginTop: 16,
  },
});

export default Header;
