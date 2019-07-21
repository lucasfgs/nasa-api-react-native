import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";

import api from "../services/nasaApi";
import { API_KEY } from "../services/credentials";

const Apod = () => {
  const [apod, setApod] = useState({});

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    let response = await api.get(`planetary/apod?api_key=${API_KEY}`);
    setApod(response.data);
    console.log(response.data.hdurl);
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
      alwaysBounceVertical={true}
    >
      <Text style={styles.title}>{apod.title}</Text>
      <Text style={styles.description}>{apod.explanation}</Text>
      <Image style={styles.image} source={{ uri: apod.hdurl }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdde1"
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 25
  },
  description: {
    marginHorizontal: 10,
    textAlign: "justify",
    lineHeight: 20
  },
  image: {
    flex: 1,
    width: Math.round(Dimensions.get("window").width),
    height: Math.round(Dimensions.get("window").height / 2),
    resizeMode: "center"
  }
});
export default Apod;
