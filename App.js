import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import IntroScreen from './screens/IntroScreen';
import MenuScreen from './screens/MenuScreen';
import PlayScreen from './screens/PlayScreen';
import EndGameScreen from './screens/EndGame';

const MainStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="IntroScreen">
        <MainStack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="EndGameScreen"
          component={EndGameScreen}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
