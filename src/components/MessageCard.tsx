import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../assets/theme';

const Card = () => {
  return (
    <View>
      <View style={styles.imageShadow}>
        <Image
          style={styles.image}
          source={
            {
              url: 'https://randomuser.me/api/portraits/women/66.jpg',
            } as any
          }
        />
      </View>

      <View style={styles.card}>
        <View style={styles.middleContent}>
          <Text style={styles.userName}>Angela Megen</Text>
          <Text style={styles.text}>Hi John!, coming for the…</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.time}>5:30 pm</Text>
          <View style={styles.messageCount}>
            <Text style={{color: 'white',    fontSize:12,fontFamily: 'Montserrat-regular',}}>5</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 370,
    height: 75,
    borderRadius: 32,
    alignSelf: 'center',
    padding: 4,
    marginBottom: 20,
    backgroundColor: COLORS.chatBubbleGrey,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.23,
    shadowRadius: 7.84,

    elevation: 5,
  },
  middleContent: {
    marginLeft: 70,
    marginTop: 10,
  },
  rightContainer: {
    alignItems: 'flex-end',
    position: 'relative',
    top: -42,
    right: 20,
  },
  userName: {
    fontFamily: 'Montserrat-SemiBold',
    color: COLORS.darkBlue,
  },
  text: {
    fontFamily: 'Montserrat',
    color: COLORS.statusColor,
    marginTop: 7,
  },
  time: {
    fontFamily: 'Montserrat-LightItalic',
    color: COLORS.statusColor,
  },
  messageCount: {
    backgroundColor: COLORS.green,
    borderRadius: 50,
    width: 18,
    height: 18,
    alignItems:'center',
    marginTop:5
  },

  image: {
    borderRadius: 50,
    width: 55,
    height: 55,

    marginLeft: 15,
    marginTop: -5,
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  imageShadow: {
    alignSelf: 'flex-start',
    zIndex: 1,
    top: 15,
    left: -5,
    position: 'absolute',
  },
});

export default Card;
