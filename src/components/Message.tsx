import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import Message from './MessageCard'
import {COLORS} from '../assets/theme';

export default class MessageList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (

              <View style={styles.card}>
                <Message/>
              </View>

          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    marginLeft:10,
    
    
  },

  bottomRightStyle: {
    backgroundColor: COLORS.green,
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },

  image: {
    borderRadius: 50,
    width: 60,
    height: 60,

    marginLeft: 15,
    marginTop: -5,
  },
  imageShadow: {
    zIndex: 1,
    top: 25,

    position: 'absolute',

  },
});
