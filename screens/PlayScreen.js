import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StackActions } from "@react-navigation/native";
import { Turn, VectorArray, ScreenHeight, ScreenWidth } from "../constants";

import Map from "../components/Map";

function PlayScreen(props) {
  let count = useRef(0).current;
  let maxCount = useRef(0).current;
  const [turn, setTurn] = useState(Turn.player1);
  const [isEnd, setIsEnd] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [map, setMap] = useState(Array(12).fill(Array(12).fill(0)));

  const onTouch = (row, col) => {
    console.log(row + col);
    changeMap(row, col);
    checkEndGame(row, col);
    changeTurn();
  };
  const changeMap = (row, col) => {
    let tempMap = map.map((arr) => {
      return arr.slice();
    });
    tempMap[row][col] = turn;
    setMap(tempMap);
  };
  const changeTurn = () => {
    setTurn(turn === Turn.player1 ? Turn.player2 : Turn.player1);
  };

  const checkVector = (vector, row, col) => {
    row += vector.y;
    col += vector.x;
    if (!(col < 0 || row < 0 || col > 11 || row > 11)) {
      if (map[row][col] === turn) {
        count++;
        checkVector(vector, row, col);
      }
    }
    return;
  };

  const checkEndGame = (row, col) => {
    for (let i = 0; i < 4; ++i) {
      count = 1;
      checkVector(VectorArray[i], row, col);
      checkVector(VectorArray[7 - i], row, col);
      maxCount = maxCount >= count ? maxCount : count;
    }
    if (maxCount >= 5) {
      setIsEnd(!isEnd);
    }
  };

  return (
    <SafeAreaView style={stylesGame.game}>
      <View style={stylesOptionBar.optionBar}>
        <TouchableOpacity
          style={stylesOptionBar.button}
          onPress={() => {
            setIsPause(!isPause);
          }}
        >
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
              color: turn === Turn.player1 ? "#ff3300" : "#a6a6a6",
            }}
          >
            X
          </Text>
        </View>
        <View style={stylesOptionBar.button}>
          <Text
            style={{
              ...stylesOptionBar.player,
              color: turn === Turn.player2 ? "#00cc00" : "#a6a6a6",
            }}
          >
            O
          </Text>
        </View>
        <TouchableOpacity style={stylesOptionBar.button}>
          <MaterialCommunityIcons name="cog" size={26} color="gray" />
        </TouchableOpacity>
      </View>
      <Map map={map} onTouch={onTouch} />
      <Modal animationType="fade" transparent={true} visible={isPause}>
        <View style={{ flex: 1, marginTop: 22 }}>
          <View style={stylesPauseGame.container}>
            <Image
              source={require("../assets/logo.png")}
              style={stylesPauseGame.logo}
            />
            <TouchableOpacity
              style={stylesPauseGame.button}
              onPress={() => setIsPause(!isPause)}
            >
              <Text style={stylesPauseGame.textBtn}>Resume</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesPauseGame.button} onPress={() => {}}>
              <Text style={stylesPauseGame.textBtn}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesPauseGame.button}
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <Text style={stylesPauseGame.textBtn}>Back Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={isEnd}>
        <View style={stylesEndGame.container}>
          <View style={stylesEndGame.winner}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: turn === 1 ? "#00cc00" : "#ff3300",
              }}
            >
              {turn === 1 ? "O" : "X"}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {" "}
              win
            </Text>
          </View>
          <View style={stylesEndGame.select}>
            <TouchableOpacity
              style={stylesEndGame.button}
              onPress={() => {
                props.navigation.dispatch(StackActions.replace("PlayScreen"));
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                Play Again
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={stylesEndGame.button}
              onPress={() => {
                props.navigation.dispatch(StackActions.popToTop());
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                Back Menu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default PlayScreen;

const stylesGame = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
});

const stylesOptionBar = StyleSheet.create({
  optionBar: {
    flexDirection: "row",
    backgroundColor: "#66ccff",
    height: Math.floor(ScreenHeight / 10),
    width: ScreenWidth,
    top: 0,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: Math.floor(ScreenWidth / 4),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  player: {
    fontSize: 24,
  },
  score: {
    color: "#fff",
    fontSize: 20,
  },
});

const stylesPauseGame = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "#66ccff",
    width: 120,
    height: 45,
    marginTop: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: Math.floor(ScreenWidth / 2),
    height: Math.floor(ScreenHeight / 4),
    marginTop: 20,
  },
});

const stylesEndGame = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  winner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Math.floor(ScreenHeight / 10),
  },
  select: {
    flexDirection: "row",
    width: ScreenWidth,
    justifyContent: "space-around",
    position: "absolute",
    bottom: 40,
  },
  button: {
    width: 140,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#66ccff",
    alignItems: "center",
    justifyContent: "center",
  },
});
