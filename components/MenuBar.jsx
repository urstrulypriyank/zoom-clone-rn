import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meetings",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

const MenuBar = () => {
  return (
    <View style={styles.container}>
      {/* first one */}

      {items.map((item) => (
        <View style={styles.buttonContainer} key={item.id}>
          <TouchableOpacity
            style={[
              styles.buttonIconContainer,
              item.id != 1 ? { backgroundColor: "blue" } : "",
            ]}
          >
            <FontAwesome name={item.name} size={22} color={"white"} />
          </TouchableOpacity>
          <Text style={styles.buttonContainerText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1f1f1f",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    padding: 10,
    width: 110,
    alignItems: "center",
  },
  buttonContainerText: {
    color: "white",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "100",
  },

  buttonIconContainer: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
