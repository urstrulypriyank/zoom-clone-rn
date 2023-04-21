import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const MeetingRoom = ({ Navigation }) => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.MeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(text) => setRoomId(text)}
            placeholder="Enter Room Id"
            placeholderTextColor="gray"
          />
        </View>
        {/* button Section */}
        <View>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Start meeting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  MeetingContainer: {},
  info: {
    width: "96%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    margin: 15,
    borderRadius: 10,
  },
  textInput: {
    color: "white",
    fontSize: 15,
  },
  button: {
    padding: 10,
    backgroundColor: "#0470FF",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
