import React, { useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, Image, Animated, Text } from "react-native";
import { StackActions } from "@react-navigation/native";
import { ScreenWidth } from "../constants";
const IntroScreen = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animation = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 2000,
    }).start(fadeOut);
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 2000,
    }).start(() => {
      props.navigation.dispatch(StackActions.replace("MenuScreen"));
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.containerLogo, { opacity: fadeAnim }]}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </Animated.View>
    </SafeAreaView>
  );
};
export default IntroScreen;
const widthAnim = Math.floor(ScreenWidth / 2);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo: {
    width: widthAnim,
    height: widthAnim,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: widthAnim,
    height: widthAnim,
  },
});
