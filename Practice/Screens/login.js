import React from 'react'
import {View, Button, TextInput, Text, KeyboardAvoidingView} from 'react-native'
import expo from 'expo'

const styles = {
  container: {
    flex: 1,
    paddingTop: expo.Constants.statusBarHeight,
    justifyContent: 'center',
    margin: 10,
  },
}

export default class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const {navigate} = this.props.navigation
    const {email, password} = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <Text style={{marginRight: 30, fontSize: 20}}> Email </Text>
            <TextInput
              style={{borderColor: '#2dbabc', borderWidth: 2, borderRadius: 5, flex: 1, width: 70}}
              value={email}
              placeholder="example@domain.com"
              onChangeText={value => this.setState({email: value})}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <Text style={{fontSize: 20}}> Password </Text>
            <TextInput
              style={{borderColor: '#2dbabc', borderWidth: 2, borderRadius: 5, flex: 1, width: 70}}
              value={password}
              placeholder="Password"
              onChangeText={value => this.setState({password: value})}
            />
          </View>
          <Button color="#2dbabc" title="Login" onPress={() => navigate('App')} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
