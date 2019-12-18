import React, {useEffect} from 'react';
import {View} from 'react-native';
import svg from '../assets/svg';

const Splash = svg['splash'].default;

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  });
  return (
    <View>
      <Splash width={'100%'} height={'100%'} />
    </View>
  );
};

export default SplashScreen;
