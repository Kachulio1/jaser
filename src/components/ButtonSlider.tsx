import React from 'react';
import {TouchableOpacity, Animated, View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../assets/theme';
export default class extends React.Component {
  state = {
    isOn: false,
    animatedValue: new Animated.Value(0),
    fadeAnim: new Animated.Value(0),
  };

  handleToggle() {
    this.setState({isOn: !this.state.isOn}, () => {
      Animated.timing(this.state.animatedValue, {
        toValue: this.state.isOn ? 132 : 0,
        duration: 400,
      }).start();
      Animated.timing(this.state.fadeAnim, {
        toValue: this.state.isOn ? 1 : 0,
        duration: 900,
      }).start();
    });
  }
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            width: 264,
            height: 42,
            borderRadius: 32,
            padding: 4,
            backgroundColor: COLORS.greyWhite,
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.23,
            shadowRadius: 7.84,

            elevation: 5,
          }}
          onPress={() => this.handleToggle()}>
          <View style={styles.toggleText}>
            <Animated.View
              style={{opacity: !this.state.isOn ? 1 : this.state.fadeAnim}}>
              <Text
                style={{
                  ...styles.message,
                  color: this.state.isOn ? COLORS.darkBlue : COLORS.white,
                }}>
                Messages
              </Text>
            </Animated.View>
            <Animated.View
              style={{opacity: this.state.isOn ? this.state.fadeAnim : 1}}>
              <Text
                style={{
                  ...styles.group,
                  color: this.state.isOn ? COLORS.white : COLORS.darkBlue,
                }}>
                Groups
              </Text>
            </Animated.View>
          </View>

          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: COLORS.green,
              width: 264 / 2,
              height: 42,
              borderRadius: 32,
              transform: [
                {
                  translateX: this.state.animatedValue,
                },
              ],
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.26,
              shadowRadius: 3.84,

              elevation: 5,
            }}></Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleText: {
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  message: {
    fontFamily: 'Poppins-semiBold',
    fontSize: 16,
    marginLeft: 30,
    lineHeight: 30,
  },
  group: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginRight: 30,
    lineHeight: 30,
  },
});
