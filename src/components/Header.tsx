import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../assets/theme';
import svg from '../assets/svg'
import UserProfile from './UserProfile'
const Logo = svg["logo"].default
const Search = svg["search"].default

export default () => {
  return (
    <View style={styles.header}>
       <Logo style={styles.logo}/>
       <UserProfile style={styles.userProfile}></UserProfile>
       <Search style={styles.search} onPress={() => console.log('I was pressed')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 180,
    paddingTop: 40,
    justifyContent:"center",
    backgroundColor: COLORS.darkBlue,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 3.84,
     flexDirection: 'row',
    elevation: 5,
  },
  userProfile:{
      flex: 3
  },
  search:{
      flex:1,
      marginRight: 15,
      marginTop:2,

  },
  logo: {
      flex:1,
      marginTop:2,
      marginLeft: 18,
      shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height:12,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
  }


});
