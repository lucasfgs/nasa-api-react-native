import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";

import RoverInfo from "../components/RoverInfo";
import api from "../services/nasaApi";
import { API_KEY } from "../services/credentials";

const Mars = () => {
  let [data, setData] = useState({
    photos: [
      {
        id: "",
        camera: {
          full_name: "Front Hazard Avoidance Camera"
        },
        earth_date: "",
        img_src: "",
        rover: {
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      }
    ]
  });

  useEffect(() => {
    getLatestMarsPhotos();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getActualDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + (dd - 16);
    return today;
  };

  const getLatestMarsPhotos = async () => {
    let response = await api.get(
      `mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getActualDate()}&api_key=${API_KEY}&page=1`
    );

    let { data } = response;
    let { photos } = data;

    photos.splice(10, 15);

    setData({ photos });
  };

  const _renderItem = ({ item }) => {
    return (
      <View>
        <Image style={styles.Image} source={{ uri: item.img_src }} />
        <Text style={styles.Text}>{`Camera: ${item.camera.full_name}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      <RoverInfo
        rover={data.photos[0].rover.name}
        landing_date={data.photos[0].rover.landing_date}
        launch_date={data.photos[0].rover.launch_date}
        status={data.photos[0].rover.status}
      />
      <FlatList
        data={data.photos}
        renderItem={_renderItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "rgb(48,51,107)"
  },
  Image: {
    width: Math.round(Dimensions.get("window").width),
    height: Math.round(Dimensions.get("window").width)
  },
  Text: {
    textAlign: "center",
    color: "white",
    fontSize: 13
  }
});

export default Mars;
