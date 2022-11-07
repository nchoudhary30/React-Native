import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { Calendarr } from "../images";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddTodo({navigation}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleSave = async() =>{
    const data = await AsyncStorage.getItem('todos');
    const todos = JSON.parse(data);
 
    console.log("Title and Due_Date are Here",title,body)
    todos.push({
      title: title,
      body: body,
      dueDate:dueDate,
    });
    console.log(todos, 'add form');
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
    setTitle('');
    setBody('');
    setDueDate(new Date());

    alert("Saved");
    navigation.navigate('UserHome');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add a Todo</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Title"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Body"
          placeholderTextColor="#003f5c"
          onChangeText={(body) => setBody(body)}
        />
      </View>
      <View style={styles.date}>
      <TextInput
          style={styles.TextInput}
          value={dueDate.toDateString()}
          placeholder="select due date"
          placeholderTextColor="#003f5c"
        />
        <TouchableOpacity
          // style={styles.wrapperIcon}
          onPress={() => setOpen(true)}
        >
          <DatePicker
        modal
        mode="datetime"
        minimumDate={new Date(Date.now())} 
        open={open}
        date={dueDate}
        onConfirm={(date) => {
          setOpen(false)
          setDueDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> 
          <Image source={Calendarr} style={styles.icon} />
        </TouchableOpacity>
        
      </View>
      <Button title="Save" onPress={handleSave}/>
      <Button title="Back" onPress={()=>navigation.navigate('UserHome')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  date: {
    marginVertical: 20,
    backgroundColor:'red',
    // flex: 0.2,
    flexDirection: "row",
    alignContent: "space-between",
  },

  heading: {
    flex: 0.3,
    fontSize: 40,
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },

  icon: {
    width: 25,
    height: 20,
marginLeft:10,
  },
  inputView: {
    // flex:1,
    borderRadius: 10,
    backgroundColor: "#b3b3cc",
    width: "70%",
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
