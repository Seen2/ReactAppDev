import React from 'react';
import {FlatList} from 'react-native';


import Line from './line';

const Row = (props) => (
  <FlatList
    data={props.contacts}
    renderItem={({item}) => <Line  contact={item}/>}
    />
)
export default Row
