import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto
        name="search"
        fgd
        size={20}
        color={"white"}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        placeholderTextColor={"white"}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 0,
  },
  textInput: {
    color: "white",
    paddingHorizontal: 10,
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
});
