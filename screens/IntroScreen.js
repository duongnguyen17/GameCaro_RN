import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, Image, Animated, Text} from 'react-native';

function IntroScreen(props) {
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
      props.navigation.navigate('MenuScreen');
    });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.containerLogo, {opacity: fadeAnim}]}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        {/* <Text style={styles.textLogo}>Caro</Text> */}
      </Animated.View>
    </SafeAreaView>
  );
}
export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  // textLogo: {
  //   fontSize: 30,
  //   color: '#ff471a',
  //   fontWeight: 'bold',
  // },
});
