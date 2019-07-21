import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";

import { DrawerItems } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Logo from "../assets/images/logo.png";

const DrawerHeader = props => {
  console.log(props);

  return (
    <View>
      <View style={styles.header}>
        {/* <Icon
          style={styles.headerIcon}
          name="md-planet"
          size={30}
          color="white"
        /> */}
        <Image source={Logo} style={styles.headerIcon} />
        <Text style={styles.headerText}>NASA API</Text>
      </View>
      <DrawerItems {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 100
  },
  headerIcon: {
    marginLeft: 10,
    width: 60,
    height: 60
  },
  headerText: {
    marginLeft: 20,
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  }
});

export default DrawerHeader;
