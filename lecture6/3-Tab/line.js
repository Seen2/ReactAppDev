import React from 'react';
import {TouchableOpacity,Text,StyleSheet,View} from 'react-native';

const styles=StyleSheet.create({
  text:{
    fontSize:30,
  },
})

select=()=>{}
const Line=(props) => (
  <TouchableOpacity
    onPress={()=>props.OnSelect(props.contact)}

     >
    <Text style={styles.text} >
      {props.contact.name}{`
      ${props.contact.phone}`}
    </Text>
  </TouchableOpacity>
)
export default Line
