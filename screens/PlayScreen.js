import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';

import {Turn, Coordinate, GameContext} from '../constants';

import OptionBar from '../components/OptionBar';
import Map from '../components/Map';

function PlayScreen(props) {
  const vectorArray = useRef([
    new Coordinate(-1, -1),
    new Coordinate(-1, 0),
    new Coordinate(-1, 1),
    new Coordinate(0, -1),
    new Coordinate(0, 1),
    new Coordinate(1, -1),
    new Coordinate(1, 0),
    new Coordinate(1, 1),
  ]);
  const count = useRef(0);
  const maxCount = useRef(0);
  const turn = useRef(Turn.player1);

  // const [currCoor, setCurrCoor] = useState(new Coordinate(0, 0));
  const matrix = useRef(props.route.params.matrix).current;
  const [map, setMap] = useState(Array(matrix).fill(Array(matrix).fill(0)));

  const tileClicked = coor => {
    //console.log(coor);
    //setCurrCoor(coor);
    changeMap(coor);
    checkEndGame(coor);
    changeTurn();
  };
  const changeMap = coor => {
    let tempMap = map.map(arr => {
      return arr.slice();
    });
    tempMap[coor.y][coor.x] = turn.current;
    //console.log(tempMap);
    setMap(tempMap);
    // console.log(map);
  };

  const changeTurn = () => {
    turn.current = turn.current === Turn.player1 ? Turn.player2 : Turn.player1;
    // console.log(turn.current);
  };

  const checkVector = (vector, coor) => {
    //console.log(vector);
    let newCoor = new Coordinate(coor.x + vector.x, coor.y + vector.y);
    if (
      !(
        newCoor.x < 0 ||
        newCoor.y < 0 ||
        newCoor.x > matrix - 1 ||
        newCoor.y > matrix - 1
      )
    ) {
      //console.log(newCoor);
      //console.log(map[newCoor.y][newCoor.x]);
      //console.log(turn.current);
      if (map[newCoor.y][newCoor.x] === turn.current) {
        //console.log('duyet1');
        count.current++;
        checkVector(vector, newCoor);
      }
    }
    return;
  };

  const checkEndGame = coor => {
    //maxCount.current = 0;
    //console.log(map);
    for (let i = 0; i < 4; ++i) {
      count.current = 1;
      checkVector(vectorArray.current[i], coor);
      //console.log('count.curr', count.current);
      checkVector(vectorArray.current[7 - i], coor);
      maxCount.current =
        maxCount.current >= count.current ? maxCount.current : count.current;
      // console.log('count.curr', count.current);
      // console.log('maxCount.current', maxCount.current);
    }
    // console.log('\n');
    //console.log(maxCount.current);
    if (maxCount.current >= 5) {
      props.navigation.navigate('EndGameScreen', {
        winner: turn.current,
      });
    }
    //return maxCount.current >= 5 ? true : false;
  };

  // useEffect(() => {
  // console.log(map);
  //   changeMap(currCoor);
  //   checkEndGame(currCoor, turn.current);
  //   changeTurn();
  // }, [currCoor]);

  return (
    <GameContext.Provider
      value={{
        currentTurn: turn.current,
        tileClicked,
        map,
        matrix,
      }}>
      <SafeAreaView style={stylesGame.game}>
        <OptionBar />
        <Map />
      </SafeAreaView>
    </GameContext.Provider>
  );
}

export default PlayScreen;

const stylesGame = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
