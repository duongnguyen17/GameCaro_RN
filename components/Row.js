import React, { useEffect } from "react";
import { View } from "react-native";
import Tile from "./Tile";
export default function Row(props) {
  const { arr, row, onTouch } = props;
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {arr.map((value, index) => (
        <Tile
          key={index}
          value={value}
          row={row}
          col={index}
          onTouch={(row, col) => onTouch(row, col)}
        />
      ))}
    </View>
  );
}
