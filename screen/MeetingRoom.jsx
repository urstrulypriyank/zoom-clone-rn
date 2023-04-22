import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useEffect, useState } from "react";
import StartMeeting from "../components/Meetings/StartMeeting";
import { Socket, io } from "socket.io-client";
import { Camera, CameraType } from "expo-camera";

const menuIcons = [
  {
    id: 1,
    name: "microphone",
    title: "mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
  },
  {
    id: 3,
    name: "upload",
    title: "share Content",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];

const MeetingRoom = ({ Navigation }) => {
  const [startCamera, setStartCamera] = useState(false);
  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    const API_URL = "http://localhost:3000/";
    socket = io("http://localhost:3000/");
    console.log("useffect ");
    socket.on("connection", () => {
      console.log("Connected");
    });

    socket.on("all-user", (user) => {
      console.log("Active Users");
      console.log(user);
      setActiveUser(user);
    });
  }, []);

  const initCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status == "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    initCamera();
    socket.emit("join-room", { roomId: roomId, userId: name });
  };

  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={styles.wrapper}>
          {/* <ScrollView> */}
          <View style={styles.wrappercameraContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUser.lenght == 0 ? "100%" : 200,
                  height: activeUser.length == 0 ? 600 : 200,
                }}
              ></Camera>
              {activeUser
                .filter((user) => user.userId != name)
                .map((user, index) => (
                  <View style={styles.activeUserContainer} key={index}>
                    <Text style={{ color: "white" }}>{user.userId}</Text>
                  </View>
                ))}
            </View>
          </View>
          {/* </ScrollView> */}
          {/* footer app menu */}

          <View style={styles.bottomBar}>
            {menuIcons.map((item, index) => (
              <TouchableOpacity style={styles.iconContainer} key={index}>
                <FontAwesome name={item.name} size={24} color={"white"} />
                <Text style={styles.bottomBarText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : (
        // start meeting section
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 13,
  },
  bottomBarText: {
    color: "white",
    marginTop: 6,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1e1e1e",
  },
  cameraContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  wrappercameraContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
  },
  activeUserContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    height: 200,
    alignItems: "center",
  },
});
