import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';

const styles=StyleSheet.create({
  text:{
    fontSize:30,
  },
})

const Line=(props) => (
  <View   >
    <Text style={styles.text} >
      {props.contact.name}{`
      ${props.contact.phone}`}
    </Text>
  </View>
)

export default Line
