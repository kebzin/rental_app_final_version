/**
 * Login: Component for user login functionality
 * - The Login component handles user login using email and password.
 * - It utilizes various components such as TextButton, InputField, IconeBotten, BottomSheetDialog, and ActivityIndicator from the project.
 * - The component dispatches actions from the authSlice and authApiSlice to handle authentication.
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants/index";
import {
  TextButton,
  InputField,
  IconeBotten,
  // IconeBotten,
} from "../common/index";
import { ActivityIndicator } from "react-native";
import { Keyboard } from "react-native";

const Login = ({ navigation }) => {
  // State variables
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Refs and dispatch
  // const bottomSheetModalRef = useRef(null);

  // Callback to handle presenting the bottom sheet modal
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    Keyboard.dismiss();
  }, []);

  // Check if the user input is valid
  const canSave = Boolean(Email) && Boolean(Password);

  return (
    <View style={style.Containe}>
      <View style={style.secondContainer}>
        <Text style={{ width: "60%", ...FONTS.h2 }}>Sign in to Continue</Text>

        {/* Email input field */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 50,
            marginBottom: 10,
          }}
          Placeholder={"Enter Email Address"}
          onChange={(text) => setEmail(text)}
          inputMode={"email"}
          value={Email}
          prependComponent={
            <Image
              source={icons.email}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* Password input field */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 1,
            marginBottom: 10,
          }}
          Placeholder={"Enter Password"}
          onChange={(text) => setPassword(text)}
          value={Password}
          secureTextEntery={!isVisible}
          prependComponent={
            <Image
              source={icons.lock}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
          appendComponent={
            <IconeBotten
              icone={isVisible ? icons.eye_off : icons.eye}
              iconeStyle={{ tintColor: COLORS.primary }}
              Onpress={() => setIsVisible(!isVisible)}
            />
          }
        />

        {/* Forget password */}
        <View
          style={{
            alignItems: "flex-end",
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.radius,
          }}
        >
          <TextButton
            onPress={() => navigation.navigate("ForgetPassword")}
            label={"Forget Password"}
            contentContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary80,
              ...FONTS.h5,
            }}
          />
        </View>

        {/* Login button */}
        <TextButton
          label={"Log In"}
          disabled={!canSave}
          contentContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Containe: {
    height: SIZES.height * 0.55,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: SIZES.radius,
    width: SIZES.width - SIZES.padding * 2,
    justifyContent: "center",
  },
  secondContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    width: SIZES.width - SIZES.padding * 2,
    flex: 1,
    justifyContent: "center",
  },
});

export default Login;
