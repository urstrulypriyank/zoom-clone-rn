import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
const contacts = [
  {
    type: "starred",
    name: "starred",
  },
  {
    type: "contact",
    name: "Priyank",
    photo: require("../assets/my_img.jpg"),
  },
  {
    type: "contact",
    name: "Shivansh",
    photo: require("../assets/placeHolder.png"),
  },
  {
    type: "contact",
    name: "Rudransh",
    photo: require("../assets/placeHolder.png"),
  },
];
const ContactSection = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      {contacts.map((data, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.row} key={index}>
            {data.type == "starred" ? (
              <View style={styles.starIcon}>
                <AntDesign name="star" size={30} color="#efefef" />
              </View>
            ) : (
              <View style={styles.starIcon}>
                {/* <Image name="star" size={30} color="#efefef" /> */}
                <Image
                  source={data.photo}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            )}
            <Text style={styles.text}>{data.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContactSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  starIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
