import React from 'react';
import { TextInput,StyleSheet,KeyboardAvoidingView,Button,Text} from 'react-native';
import {Constants} from 'expo'


export default class Form extends React.Component{

  state=
  {
    name:'',
    phone:'',
    isValid:false,
  }
  ValidContact=()=>{
    if(this.state.name.length>3 && (this.state.phone).length<=10 && +(this.state.phone) >=0 ){
      this.setState(()=>({isValid:true}))
    }
    else{
      this.setState(()=>({isValid:false}))
    }
  }
  addcontacts = ()=>{
    this.props.add({name:this.state.name,phone:this.state.phone})
    this.props.next()
  }
  nameChange= name=>{
    this.setState({name},this.ValidContact)
  }
  phoneChange= phone => {
    this.setState({phone},this.ValidContact)
  }
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}  enabled >
          <TextInput
           style={styles.textinput}
           value={this.state.name}
           onChangeText={this.nameChange}
           placeholder="Name"
            />
          <TextInput
          style={styles.textinput}
          value={this.state.phone}
          onChangeText={this.phoneChange}
          keyboardType="numeric"
          placeholder="phone number"
          />
        <Button title="Save" onPress={this.addcontacts} disabled={!this.state.isValid} />

      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'column',
    justifyContent:'center',
    backgroundColor: '#fff',
    paddingTop:Constants.statusBarHeight
  },
  textinput:{
    padding:10,
    borderWidth:2,
    borderColor:"#f0fc",
  }
});
