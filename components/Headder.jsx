import { StyleSheet, Text, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";

const Headder = () => {
  return (
    <View style={styles.container}>
      {/* LEFT  */}
      <Entypo name="notification" size={30} color="#efefef" />
      {/* MID */}
      <Text style={styles.heading}>Meet & Chat</Text>
      {/* RIGHT */}
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Headder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: "#efefef",
    fontWeight: "500",
  },
});
