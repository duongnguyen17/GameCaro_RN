import React from 'react';
import {Dimensions} from 'react-native';

export const ScreenHeight = Dimensions.get('screen').height;
export const ScreenWidth = Dimensions.get('screen').width;
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

export const GameContext = React.createContext();
