import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Message from './Message'
export default class MessageList extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Message />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  }
})