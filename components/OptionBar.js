import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GameContext, ScreenHeight, ScreenWidth, Turn} from '../constants';

export default function OptionBar() {
  const currentTurn = useContext(GameContext).currentTurn;

  return (
    <View style={stylesOptionBar.optionBar}>
      <TouchableOpacity style={stylesOptionBar.button} onPress={() => {}}>
        <MaterialCommunityIcons
          name="arrow-left-bold-outline"
          size={26}
          color="gray"
        />
      </TouchableOpacity>
      <View style={stylesOptionBar.button}>
        <Text
          style={{
            ...stylesOptionBar.player,
            color: currentTurn === Turn.player1 ? '#ff3300' : '#a6a6a6',
          }}>
          X
        </Text>
      </View>
      {/* <View style={stylesOptionBar.button}>
        <Text style={stylesOptionBar.score}>0</Text>
        <Text style={stylesOptionBar.score}> - </Text>
        <Text style={stylesOptionBar.score}>0</Text>
      </View> */}
      <View style={stylesOptionBar.button}>
        <Text
          style={{
            ...stylesOptionBar.player,
            color: currentTurn === Turn.player2 ? '#00cc00' : '#a6a6a6',
          }}>
          O
        </Text>
      </View>
      <TouchableOpacity style={stylesOptionBar.button}>
        <MaterialCommunityIcons name="cog" size={26} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const stylesOptionBar = StyleSheet.create({
  optionBar: {
    flexDirection: 'row',
    backgroundColor: '#001a4d',
    height: Math.floor(ScreenHeight / 20),
    width: ScreenWidth,
    top: 0,
    position: 'absolute',
  },
  button: {
    width: Math.floor(ScreenWidth / 4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  player: {
    fontSize: 24,
  },
  score: {
    color: '#fff',
    fontSize: 20,
  },
});
