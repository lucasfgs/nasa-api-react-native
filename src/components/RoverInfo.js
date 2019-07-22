import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import curiosity from "../assets/images/curiosity.jpg";

const RoverInfo = props => (
  <View style={styles.Container}>
    <View style={styles.Info}>
      <Text style={styles.Text}>
        <Text style={styles.TextBold}>Rover:</Text> {props.rover}
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.TextBold}>Launch Date:</Text> {props.launch_date}
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.TextBold}>Landing Date:</Text> {props.landing_date}
      </Text>
      <Text style={styles.Text}>
        <Text style={styles.TextBold}>Status: </Text>
        <Text style={styles.Status}>{props.status}</Text>
      </Text>
    </View>
    <Image source={curiosity} style={styles.Image} />
  </View>
);

const styles = StyleSheet.create({
  Container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(48,51,107)",
    flexDirection: "row"
  },
  Info: {
    marginLeft: 10,
    color: "#fff"
  },
  Text: {
    color: "white",
    fontSize: 16
  },
  TextBold: {
    fontWeight: "bold"
  },
  Status: {
    color: "#2ecc71",
    fontWeight: "bold"
  },
  Image: {
    width: 150,
    height: 100
  }
});

export default RoverInfo;
