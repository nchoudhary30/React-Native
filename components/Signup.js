import React, { useState } from "react";
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

export default function Signup(props) {
  const [name, setName] = useState("");
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
    setCheckValidPassword(checkPasswordValidity(text))
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Todo App</Text>
      </View>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          type='email'
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => handleCheckEmail(text)}
        />
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Enter Valid Email Address</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Create Password"
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
        {checkValidPassword?<Text>{checkValidPassword}</Text>:null}
      </View>
      <View style={styles.Signup}>
        <Text>Already a User?</Text>
        <TouchableOpacity>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              props.setShow(!props.show);
            }}
          >
            <Text>Login!</Text>
          </Pressable>
        </TouchableOpacity>
      </View>

      <Button style={styles.Login} title="Signup" />
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },


  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },

  pressable: {
    marginLeft: 7,
    borderRadius: 4,
    backgroundColor: "#CAEDEE",
  },

  Signup: {
    flex: 0.2,
    flexDirection: "row",
    alignContent: "space-between",
    // justifyContent:'center'
  },

  Login: {
    flex: 1,
    // flexDirection: 'row',
    alignContent: "center",
    justifyContent: "center",
    color: "#79A390",
  },

  inputView: {
    borderRadius: 10,
    backgroundColor: "#b3b3cc",
    width: "70%",
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
