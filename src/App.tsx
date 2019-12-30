/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import 'react-native-gesture-handler'
import SplashScreen from './screens/SplashScreen'
import Header from './components/Header'
import {COLORS} from './assets/theme'


const Home = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <Header></Header>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor:COLORS.darkBlue,
    flex: 1
  }
});

const RootNavigator = createSwitchNavigator({
  Home:{
    screen:Home
  } ,
  Splash: {
    screen: SplashScreen}
}, {

  initialRouteName: 'Splash'
});

export default createAppContainer(RootNavigator);
