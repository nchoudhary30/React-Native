import React, { useState } from 'react'
import { StyleSheet , Text} from 'react-native'
import { View } from 'react-native'
import Login from './components/Login'
import Signup from './components/Signup'

export default function App() {
  const [show,setShow]=useState(false);
  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Todo App</Text>
      {show?<Login show={show} setShow={setShow}/>:<Signup show={show} setShow={setShow}/>}

    </View>
  )
}

const styles = StyleSheet.create({
  app:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#C5C5C5'
  }
,
  heading:{
    fontSize:50,
    flex:0.35,
    textAlign:'center',
    justifyContent:'center'
  }
});