/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import 'react-native-gesture-handler';
import SplashScreen from './screens/SplashScreen';
import Header from './components/Header';
import ButtonSlider from './components/ButtonSlider';
import { COLORS } from './assets/theme';
import MessageList from './components/MessageList';

import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text>Settings</Text>
  </View>
);

const CallsScreen = () => (
  <View style={styles.container}>
    <Text>Calls</Text>
  </View>
);
const Home = (props:any) => {
  const [currentPage, setPage] =  useState('messages');

  const setCurrentPage = (state:boolean) => {
      state ? setPage('groups') : setPage('messages')
  }
  
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <Header></Header>
      <View>
        <ButtonSlider setCurrentPage={setCurrentPage} navigation={props.navigation} />
      </View>
      <View style={styles.messageList}>
        <MessageList navigation={props.navigation} currentPage={currentPage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.darkBlue,
  },

  screen: {
    backgroundColor: COLORS.darkBlue,
    flex: 1,
  },
  messageList: {
    flex: 1,
    marginTop: 20,
    backgroundColor: COLORS.darkBlue,
  },
});

const RootNavigator = createSwitchNavigator(
  {
    Home: {
      screen: Home,
    },
    Splash: {
      screen: SplashScreen,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

const BottomTab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: RootNavigator,
      navigationOptions: {
        tabBarLabel: 'Messages',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" color={tintColor} size={24}></Icon>
        ),
      },
    },
    Calls: {
      screen: CallsScreen,
      navigationOptions: {
        tabBarLabel: 'Calls',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-call" color={tintColor} size={24}></Icon>
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24}></Icon>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: COLORS.green,
    inactiveColor: COLORS.chatBubbleGrey,
    barStyle: { backgroundColor: COLORS.darkBlue, height: 70 },
    sceneAnimationEnabled: true,
  },
);

RootNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default createAppContainer(BottomTab);
