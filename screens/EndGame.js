import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ScreenWidth} from '../constants';

function EndGameScreen(props) {
  const [winner, setWinner] = useState(props.route.params.winner);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.winner}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: winner === 1 ? '#ff3300' : '#00cc00',
          }}>
          {winner === 1 ? 'X' : 'O'}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          {' '}
          win
        </Text>
      </View>
      <View style={styles.select}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('PlayScreen', {
              matrix: 13,
            });
          }}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Play Again
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('MenuScreen');
          }}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Back Menu
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default EndGameScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  winner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 200,
  },
  select: {
    flexDirection: 'row',
    width: ScreenWidth,
    justifyContent: 'space-around',
    marginTop: 100,
  },
  button: {
    width: 140,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#0055ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
