import React from "react";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AddButton } from "../images";
import AddTodo from "./AddTodo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function UserHome({ navigation }) {
  const isFocused = useIsFocused()

  const [myData,setmyData]=useState([])
const _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('todos');
    if (value !== null) {
      // console.log("Data inside use Effect"+value);
      const data = JSON.parse(value);
      setmyData(data);
    }

  } catch (error) {
    console.log(error);
  }
}; 
useEffect(() => {
  
  _retrieveData()
  // console.log("----",myData)
}, [isFocused]);

  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text>Hello User</Text>
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => navigation.navigate("AddTodo")}
        >
          <Image source={AddButton} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <Text style={styles.listhead}>Your Todos</Text>
        {myData.map((item) => {
          return (
            <View style={styles.todo}>
              <View>
                <Text>Title : {item.title}</Text>
              </View>

              <View>
                <Text>Due : {item.dueDate}</Text>
              </View>
              <View>
                <Text>Body : {item.body}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    // backgroundColor: "#C5C5C5",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#ccffff'
  },
  icon: {
    width: 30,
    height: 30,
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },

  list: {
    // marginTop:3,
    // marginBottom:8,
    flex: 9,
    marginHorizontal:5,
  },
  listhead:{
    textAlign:'center',
    marginVertical:10,
  },
  todo: {
    // flex: 1,
    marginVertical:3,
    borderTopWidth:1,
    borderStartWidth:5,
    height:60
  },
});
