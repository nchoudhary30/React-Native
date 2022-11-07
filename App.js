import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import AddTodo from "./components/AddTodo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const stack = createNativeStackNavigator();

export default function App() {
  const [show, setShow] = useState(true);
  AsyncStorage.setItem('todos', JSON.stringify([]));
  return (
    <NavigationContainer>
      <stack.Navigator>
        {show?<stack.Screen name="Login" component={Login} initialParams={{show:{show}, setShow:{setShow}}}/>
        :<stack.Screen name="Signup" component={Signup} initialParams={{show:{show}, setShow:{setShow}}}/>}
        
        <stack.Screen name="AddTodo" component={AddTodo}/>

        <stack.Screen name="UserHome" component={UserHome}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});