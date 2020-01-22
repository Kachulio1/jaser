import React, {useEffect} from 'react';
import {Animated} from 'react-native';

interface Props  {
  children: any;
  duration: number;
  from: string;
};

const Slide: React.FunctionComponent<Props> = ({
  children,
  duration = 500,
  from,
}) => {

  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
  }, [children]);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 5,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 5],
              outputRange: [from === 'ltr' ? -300 : 300, 0],
            }),
          },
          {perspective: 1000},
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default Slide;
