import React, { useEffect } from "react";
import { View } from "react-native";
import Tile from "./Tile";
const Row = (props) => {
  const { arr, row, arrWin, onTouch } = props;
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {arr.map((value, index) => {
        if (
          arrWin.find(
            (element) => element.row === row && element.col === index
          ) === undefined
        ) {
          return (
            <Tile
              key={index}
              value={value}
              row={row}
              col={index}
              bgColor={"#fff"}
              onTouch={(row, col) => onTouch(row, col)}
            />
          );
        } else {
          return (
            <Tile
              key={index}
              value={value}
              row={row}
              col={index}
              bgColor={"#cccccc"}
              onTouch={(row, col) => onTouch(row, col)}
            />
          );
        }
      })}
    </View>
  );
};
export default Row;
