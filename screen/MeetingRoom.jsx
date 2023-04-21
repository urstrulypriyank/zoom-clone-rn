import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import StartMeeting from "../components/Meetings/StartMeeting";

const MeetingRoom = ({ Navigation }) => {
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
      />
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
});
