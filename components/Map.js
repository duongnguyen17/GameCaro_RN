import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Row from "./Row";
import { MapSize } from "../constants";
const Map = (props) => {
  const { map, arrWin, onTouch } = props;
  return (
    <View style={stylesMap.map}>
      {map.map((arr, index) => (
        <Row
          key={index}
          arr={arr}
          row={index}
          arrWin={arrWin}
          onTouch={onTouch}
        />
      ))}
    </View>
  );
};

export default Map;

const stylesMap = StyleSheet.create({
  map: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
    width: MapSize,
    height: MapSize,
  },
});
