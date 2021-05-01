import React from "react";
import { Dimensions } from "react-native";

export const ScreenHeight = Dimensions.get("screen").height;
export const ScreenWidth = Dimensions.get("screen").width;
export const TileSize= Math.floor(ScreenWidth /12);
export const MapSize = Math.floor(ScreenWidth /12) * 12;

export const Turn = {
  player1: 1,
  player2: 2,
};

export class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
export const VectorArray = [
  new Coordinate(-1, -1),
  new Coordinate(-1, 0),
  new Coordinate(-1, 1),
  new Coordinate(0, -1),
  new Coordinate(0, 1),
  new Coordinate(1, -1),
  new Coordinate(1, 0),
  new Coordinate(1, 1),
];
export const GameContext = React.createContext();
