import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import Tile from './Tile';
import {Coordinate, GameContext, ScreenWidth} from '../constants';
function Map() {
  const map = useContext(GameContext).map;
  return (
    <View style={stylesMap.map}>
      {map.map((arr, row) => {
        return arr.map((currentValue, column) => (
          <Tile
            key={row + column}
            coor={new Coordinate(column, row)}
            value={currentValue}
          />
        ));
      })}
    </View>
  );
}

export default Map;

const stylesMap = StyleSheet.create({
  map: {
    width: ScreenWidth,
    height: ScreenWidth,
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
});
