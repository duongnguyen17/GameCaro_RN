import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Row from "./Row";
import { MapSize } from "../constants";
function Map(props) {
  const { map, onTouch } = props;
  return (
    <View style={stylesMap.map}>
      {map.map((arr, index) => (
        <Row key={index} arr={arr} row={index} onTouch={onTouch} />
      ))}
    </View>
  );
}

export default Map;

const stylesMap = StyleSheet.create({
  map: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
    width: MapSize,
    height: MapSize,
  },
});
