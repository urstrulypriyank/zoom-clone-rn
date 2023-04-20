import { StyleSheet, Text, View , StatusBar } from "react-native";
import { SafeAreaView } from "react-native";
// import { StatusBar } from "expo-status-bar";
import Header from "../components/Headder";
import React from "react";
import ContactSection from "../components/ContactSection";
import MenuBar from "../components/MenuBar";
import SearchBar from "../components/SearchBar";

// console.log(StatusBar.currentHeight);

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeareaview}>
        <Header />
        <SearchBar />
        <MenuBar />
        <ContactSection />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 45,
    height: "100%",
    width: "100%",
  },
  safeareaview: {
    backgroundColor: "#1B1B1B",
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
