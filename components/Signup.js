import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export default function Signup(props) {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={name => setEmail(name)}
        />
      </View>

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
          placeholder="Create Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.Signup}>
        <Text>Already a User?</Text>
        <TouchableOpacity>
          <Pressable style={styles.pressable} onPress={()=>{props.setShow(!props.show)}}>
            <Text>Login!</Text>
          </Pressable>
        </TouchableOpacity>
      </View>

      <Button style={styles.Login} title="Signup"/>
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

  heading:{
    flex:0.3,
    fontSize:40
  },

  pressable:{
    marginLeft:7,
    borderRadius:4,
    backgroundColor:'#CAEDEE'
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
    alignContent: 'center',
    justifyContent: 'center',
    color:"#79A390"
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
    height: 40,
    // flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
