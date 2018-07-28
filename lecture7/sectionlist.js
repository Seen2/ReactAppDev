import React from 'react';
import { SectionList,StyleSheet,Text,Button} from 'react-native';
import PropTypes from 'prop-types';

import Line from './line';
const styles=StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:"bold"
  },
})


class Row extends React.Component{


  render(){
  //  console.log(this.props.name)
    return(

           <SectionList
             renderItem={({item}) => <Line  OnSelect={this.props.OnSelect} contact={item} />}
             renderSectionHeader={({section}) => <Text style={styles.text}>{section.title}</Text>}
             sections={[
             {title:'contacts',data:this.props.contacts,},
             ]}
             />
    )
  }
}


export default Row
/*
check

Row.propTypes={
  name:PropTypes.string,
}
*/
