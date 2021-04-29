import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {GameContext, ScreenWidth} from '../constants';

export default function Tile(props) {
  const tileClicked = useContext(GameContext).tileClicked;
  const matrix = useContext(GameContext).matrix;

  return (
    <View
      style={{
        ...stylesTile.tile,
        width: Math.floor(ScreenWidth / matrix),
        height: Math.floor(ScreenWidth / matrix),
      }}>
      {props.value === 0 ? (
        <TouchableOpacity
          style={{
            width: 10,
            height: 10,
            backgroundColor: '#fff',
          }}
          onPress={() => {
            tileClicked(props.coor);
          }}
        />
      ) : props.value === 1 ? (
        <Text style={{...stylesTile.symbol, color: '#ff3300'}}>X</Text>
      ) : (
        <Text style={{...stylesTile.symbol, color: '#00cc00'}}>O</Text>
      )}
    </View>
  );
}
const stylesTile = StyleSheet.create({
  tile: {
    backgroundColor: '#fff',
    // backgroundColor: '#99ff99',
    borderWidth: 1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
