import React, { useState, useEffect } from "react";

import axios from "axios";
import { View, Image, Text } from "react-native";
import { Container, Form, Item, Input, Button } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const res = await axios.post("http://192.168.1.6:50001/api/v1/login", {
        email: email,
        password: password,
      });

      props.navigation.navigate("Home");
      return res;
    } catch (err) {
      const resError = err.response.data.error.message;
      alert(resError);
    }
  };

  return (
    <Container>
      <View
        style={{
          alignItems: "center",
          margin: 50,
          marginTop: "50%",
        }}
      >
        <Image
          source={require("../Images/blackIcon.png")}
          style={{ height: 50, width: 210 }}
        />
      </View>

      <Form style={{ paddingLeft: 20, paddingRight: 30 }}>
        <Item style={{ marginTop: 20 }}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </Item>

        <Item style={{ marginTop: 20 }}>
          <Input
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={true}
          />
        </Item>
        {/* <Text style={{ marginLeft: 20, fontSize: 12, color: "red" }}>
          {error}
        </Text> */}
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Button
            block
            style={{
              backgroundColor: "orange",
              marginTop: 50,
              padding: 20,
              marginLeft: 16,
            }}
          >
            <Text style={{ fontSize: 16, color: "#fff" }}>SIGN IN</Text>
          </Button>
        </TouchableOpacity>
      </Form>
    </Container>
  );
};

export default LoginScreen;
