import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Picker,
  BackHandler,
  Alert
} from "react-native";
// import Picker from '@react-native-picker/picker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ScreenHeight, ScreenWidth } from "../constants";

function MenuScreen(props) {
  // const [selectedValue, setSelectedValue] = useState(12);

  const quiteApp = () => {
    Alert.alert("You are so happy!","Keep playing. Please.... :))))", [
      {
        text: "OK :)",
        onPress: () => {},
        style: "cancel",
      },
      { text: "No. Quite!", onPress: () => BackHandler.exitApp() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btnQuit}>
        <MaterialIcons
          name="cancel"
          size={40}
          color="#808080"
          onPress={quiteApp}
        />
      </TouchableOpacity>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      {/* <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="10 x 10" value={10} />
        <Picker.Item label="11 x 11" value={11} />
        <Picker.Item label="12 x 12" value={12} />
        <Picker.Item label="13 x 13" value={13} />
        <Picker.Item label="14 x 14" value={14} />
        <Picker.Item label="15 x 15" value={15} />
      </Picker> */}
      <TouchableOpacity
        style={styles.btnPlay}
        onPress={() => {
          props.navigation.navigate("PlayScreen");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 35, fontWeight: "bold" }}>
          Play
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSetting} onPress={() => {}}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Setting
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center'
  },
  btnQuit: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  logo: {
    width: Math.floor(ScreenWidth/2),
    height: Math.floor(ScreenHeight/4),
    
  },
  btnPlay: {
    backgroundColor: "#66ccff",
    width: 140,
    height: 60,
    marginTop: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSetting: {
    backgroundColor: "#66ccff",
    width: 120,
    height: 45,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    marginTop: 40,
    width: 150,
    height: 45,
  },
});
