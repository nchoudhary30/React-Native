import React, { useEffect, useState } from "react";
import { EyeActive, Eye } from "../images";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Signup from "./Signup";

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPassword, setCheckValidPassword] = useState('');

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (value && !isNonWhiteSpace.test(value)) {
      return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (value && !isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (value && !isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (value && !isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }

    const isValidLength = /^.{8,16}$/;
    if (value && !isValidLength.test(value)) {
      return "Password must be 8-16 Characters Long.";
    }
    return null;
  };

  const handleCheckPassword = (text) => {
    setPassword(text);
    // if (password_validate(text)) {
    //   setCheckValidPassword(false);
    // } else {
    //   setCheckValidPassword(true);
    // }
    setCheckValidPassword(checkPasswordValidity(text))


  };
//   useEffect(() => {fetch('http://localhost:8080/login', 
//   {
//     method:'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   }
//   )
//   .then(function(response){
//     console.log(response)
//     return response.json();

//   })
//   .catch(function(error) {
//   console.log('There has been a problem with your fetch operation: ' + error.message);
//    // ADD THIS THROW error
//     throw error;
//   });
// }, []);

   const handleLogin = async() => {

    if(email=='nikhil@gmail.com' && password=='1234'){
      navigation.navigate("UserHome")
    }
    else if(email==""){
      alert('Please enter Email');
    }
    else if(password==""){
      alert('Please enter Password');
    }
    else{
      alert('Invalid email or password!');
    }


      //   try {
      //     let response = await fetch('http://localhost:8080/login', {
      //         method: 'POST',
      //         headers: {
      //             'Accept': 'application/json',
      //             'Content-type':'application/json'
      //         }
      //     })
      //     .then((response) => response.json())
      //     .then((json) => {
      //       console.log("andar");
      //     })
      // }
      // catch(e) {
      //     // console.log(e);
      //     throw(e);
      // }
       
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Todo List</Text>
      </View>
      <View style={styles.pages}>
      <Text style={styles.heading}>Login to Your Account</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          type="email"
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleCheckEmail(text)}
        />
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Enter Valid Email Address</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={seePassword}
          onChangeText={(password) => handleCheckPassword(password)}
          />
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}
          >
          <Image source={seePassword ? Eye : EyeActive} style={styles.icon} />
        </TouchableOpacity>

          {checkValidPassword?<Text>{checkValidPassword}</Text>:<Text></Text>}
      </View>

          <Button style={styles.Login} onPress={()=>{handleLogin()}} title="Login" />
      <View style={styles.Signup}>
        <Text>New to Todo App?</Text>
        <TouchableOpacity>
          <Pressable
            style={styles.pressable}
            
          >
            <Text>Signup!</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#A47272",
    alignItems: "center",
    justifyContent: "center",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  welcome:{
    fontSize:40
  },

  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },

  icon: {
    width: 25,
    height: 20,
  },

  pressable: {
    marginLeft: 7,
    borderRadius: 4,
    backgroundColor: "#CAEDEE",
  },

  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#A47272",
    width:'100%',
  },

  pages: {
    flex: 5,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#E9DCDC",
    width:"100%"
  },

  heading: {
    flex: 0.3,
    fontSize: 40,
  },

  Signup: {
    marginTop:10,
    flex: 0.2,
    flexDirection: "row",
    alignContent: "space-between",
    // justifyContent:'center'
  },

  textFailed:{
    color:'red'
  },

  Login: {
    flex: 1,
    // flexDirection: 'row',
    color: "#79A390",
    alignContent: "center",
    justifyContent: "center",
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
