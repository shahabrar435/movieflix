import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loader = (props) => {
  const { isLoading } = props;

  return (
    <>
      {isLoading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
