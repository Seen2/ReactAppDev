import React from 'react';
import { ScrollView,View } from 'react-native';


import Line from './line';


const Row = (props) => (
          <ScrollView  >
            {props.contacts.map(contact => (<Line key={contact.key} contact={contact}/>))}
          </ScrollView>
  )


export default Row
