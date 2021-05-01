import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { GameContext, TileSize } from "../constants";

export default function Tile(props) {
  const { value, row, col, onTouch } = props;
  return (
    <TouchableOpacity
      style={stylesTile.container}
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
}
const stylesTile = StyleSheet.create({
  container: {
    width: TileSize,
    height: TileSize,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
  },
  symbol: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
