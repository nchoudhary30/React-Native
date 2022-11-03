import React, {useState} from 'react';
// import TextInput from 'react-native-input-validator';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';



export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log-In</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.Signup}>
        <Text>New to Todo App?</Text>
        <TouchableOpacity>
          <Pressable style={styles.pressable} onPress={()=>{props.setShow(!props.show)}}>
            <Text>Signup!</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
      <Button style={styles.Login} title="Login" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },

  pressable:{
    marginLeft:7,
    borderRadius:4,
    backgroundColor:'#CAEDEE'
  },

  heading:{
    flex:0.3,
    fontSize:40
  },

  Signup: {
    flex: 0.2,
    flexDirection: 'row',
    alignContent: 'space-between',
    // justifyContent:'center'
  },

  Login: {
    flex: 1,
    // flexDirection: 'row',
    color:"#79A390",
    alignContent: 'center',
    justifyContent: 'center',
  },

  inputView: {
    borderRadius:10,
    backgroundColor: '#b3b3cc',
    width: '70%',
    height: 45,
    marginBottom: 20,
    // alignItems: 'center',
  },

  TextInput: {
    height: 50,
    // flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
