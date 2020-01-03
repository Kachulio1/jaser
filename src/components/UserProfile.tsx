import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,

} from 'react-native';
import svg from '../assets/svg';

import {COLORS} from '../assets/theme';

const AddIcon = svg['addSmall'].default;
const EditIcon = svg['edit'].default;

export default ({props}: any) => {
  const [status, setStatus] = useState(`Aloha, I'm new here!`);
  const [focus, setFocus] = useState(false);
  console.log(focus)
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageShadow}>
          <Image
            style={styles.image}
            source={
              {url: 'https://randomuser.me/api/portraits/women/66.jpg'} as any
            }
          />
        </View>
        <AddIcon style={styles.addIcon} />
      </View>
      <View>
        <Text style={styles.name}>Jane Doe</Text>
        <View style={styles.statusContainer}>
          <TextInput
            style={styles.status}
            onChangeText={text => text.length <= 23 && setStatus(text)}
            value={status}
            autoFocus={focus}
            editable={focus}
            onBlur={()=> setFocus(false)}
            clearTextOnFocus={true}
            autoCorrect={false}
          />

          <EditIcon
            style={{marginLeft: 10, marginTop: -2, position: 'absolute', left: 145}}
            onPress={() => (console.log('focus'), setFocus(true))}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingTop: 40,

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
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
    borderColor: COLORS.green,
    borderWidth: 2.5,
    marginLeft: 15,
    marginTop: -5,
  },
  imageShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },

  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '400',
    marginLeft: 30,
    marginBottom: 10,
  },

  status: {
    color: COLORS.statusColor,
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    marginLeft: 30,
  },

  addIcon: {
    position: 'absolute',
    left: 45,
    top: 43,
  },

  statusContainer: {
    flexDirection: 'row',
  },
});
