import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Keyboard } from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants/index";
import {
  TextButton,
  InputField,
  IconeBotten,
  CheckBox,
  // BottomSheetDialog,
} from "../../components/common/index";
import { useNavigation } from "@react-navigation/native";

const Register = ({ setmode }) => {
  const [firstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  // const [phoneNumber, setPHone] = useState("");
  const [termCheck, setTermCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  // const [addRequestStatus, setAddRequestStatus] = useState("idle");

  // hook
  const bottomSheetModalRef = useRef(null);
  const Navigate = useNavigation();

  // bottom sheet

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    Keyboard.dismiss();
  }, []);

  const canSave =
    Boolean(firstName) &&
    Boolean(Email) &&
    Boolean(Password) &&
    Boolean(termCheck);

  const onRegisterUser = async (event) => {
    // event.preventDefault();
    Navigate.navigate("onboading");
  };

  return (
    <View style={style.Containe}>
      <View style={style.secondContainer}>
        {/* {isLoading && (
          <ActivityIndicator
            size="large"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 30,
            }}
          />
        )} */}

        <Text style={{ width: "60%", ...FONTS.h2 }}>Creat new account</Text>
        {/* Input fields  */}

        {/* UserName */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 50,
            marginBottom: 10,
          }}
          Placeholder={"Enter Full Name"}
          onChange={(text) => setFirstName(text)}
          value={firstName}
          inputMode={"text"}
          prependComponent={
            <Image
              source={icons.person}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* lastname */}

        {/* email Address */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginBottom: 10,
          }}
          Placeholder={" Enter Email"}
          onChange={(text) => setEmail(text)}
          value={Email}
          inputMode={"email"}
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
        {/* phone Numbr */}

        {/* password field */}
        <InputField
          inputContainerStyle={{
            backgroundColor: COLORS.lightGrey80,
          }}
          containerStyle={{
            marginTop: 1,
            marginBottom: 10,
          }}
          Placeholder={"Enter  Password"}
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

        {/* check box */}
        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <CheckBox
            isSelected={termCheck}
            Onpress={() => setTermCheck(!termCheck)}
          />

          <Text
            style={{
              ...FONTS.body5,
            }}
          >
            By registering you have accepted to the user{" "}
            <Text style={{ color: COLORS.primary }}>terms and conduction</Text>
          </Text>
        </View>

        {/* register button  */}
        <TextButton
          onPress={() => onRegisterUser()}
          label={"Create Account"}
          disabled={!canSave}
          contentContainerStyle={{
            height: 50,
            marginTop: 20,
            borderRadius: SIZES.radius,
          }}
        />
        {/* {isError && (
          <Text style={{ textAlign: "center", ...FONTS.body5 }}>
            {error?.data?.message}
          </Text>
        )} */}
        {/* <BottomSheetDialog
          PanDownToClose={false}
          bottomSheetModalRef={bottomSheetModalRef}
          Title={
            isError === true
              ? "Oops Something went wrong "
              : " Register Successfully"
          }
          ButtonText={isError === true ? "Try again" : "Continue to login"}
          Icone={isError === true ? images.warning : icons.checkmark}
          Status={isError === true ? "Error" : "Success"}
          Message={isError ? error?.data?.message : isSuccess && data.message}
          HandleClick={() => {
            if (isSuccess) {
              setmode((prev) => !prev);
              return bottomSheetModalRef.current?.close();
            } else if (isError) {
              return bottomSheetModalRef.current?.close();
            }

            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: "AuthMain" }],
            // });
          }}
        /> */}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Containe: {
    height: SIZES.height * 0.6,
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
  },
  secondContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    width: SIZES.width - SIZES.padding * 2,
    flex: 1,
  },
});

export default Register;
