import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { GameContext, TileSize } from "../constants";

const Tile = (props) => {
  const { value, row, col, bgColor, onTouch } = props;
  return (
    <TouchableOpacity
      style={[stylesTile.container, { backgroundColor: bgColor }]}
      onPress={() => {
        if (value === 0) onTouch(row, col);
      }}
    >
      {value === 0 ? null : (
        <Text
          style={{
            ...stylesTile.symbol,
            color: value === 1 ? "#ff3300" : "#00cc00",
          }}
        >
          {value === 1 ? "X" : "O"}
        </Text>
      )}
    </TouchableOpacity>
  );
};
const stylesTile = StyleSheet.create({
  container: {
    width: TileSize,
    height: TileSize,
    borderWidth: 0.5,
    borderColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  symbol: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Tile;
