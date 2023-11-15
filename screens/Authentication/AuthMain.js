import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants/index";
import { Image } from "react-native";
import TextButton from "../../components/common/TextButton";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import { IconeBotten } from "../../components/common";

const AuthMain = ({ navigation, route }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { register } = route.params;

  useEffect(() => {
    if (register) {
      setIsRegistering(true);
    }
  }, [register]);

  const handlePress = () => {
    Keyboard.dismiss();
  };

  const renderAuthContent = () => {
    if (isRegistering) {
      return <Register />;
    } else {
      return <Login navigation={navigation} />;
    }
  };

  const renderAuthFooter = () => {
    const footerText = isRegistering
      ? "Already have an Account"
      : "Don't have an Account";
    const buttonText = isRegistering ? "Login Now" : "Create Account";

    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>{footerText}</Text>
        <TextButton
          label={buttonText}
          onPress={() => setIsRegistering(!isRegistering)}
          contentContainerStyle={styles.footerButtonContainer}
          labelStyle={styles.footerButtonText}
        />
      </View>
    );
  };

  const renderLoginWithGoogle = () => {
    return (
      <View style={styles.googleLoginContainer}>
        <Text style={styles.googleLoginText}>Or continue with</Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <IconeBotten
            icone={icons.google}
            containerStyle={{
              height: 50,
              width: 50,
              borderRadius: SIZES.radius,
              marginRight: 15,
              backgroundColor: COLORS.dark80,
            }}
          />

          {/* <TouchableOpacity>
            <Image style={styles.googleLoginIcon} source={icons.google} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.googleLoginIcon} source={icons.google} />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image source={images.logo} alt="logo" style={styles.logo} />
        {renderAuthContent()}
        {renderLoginWithGoogle()}
        {renderAuthFooter()}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: SIZES.padding,
  },
  logo: {
    alignSelf: "center",
    height: 50,
    width: 50,
    marginTop: SIZES.padding * 2,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: SIZES.padding,
    textAlign: "center",
  },
  footerText: {
    ...FONTS.h6,
    color: COLORS.grey,
  },
  footerButtonContainer: {
    flex: 1,
    height: 30,
    backgroundColor: null,
  },
  footerButtonText: {
    color: COLORS.primary80,
    ...FONTS.body4,
  },
  googleLoginContainer: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: SIZES.padding * 2,
    paddingTop: SIZES.padding * 1.7,
  },
  googleLoginText: {
    ...FONTS.body4,
    paddingBottom: 10,
  },
  googleLoginIcon: {
    width: 30,
    height: 30,
  },
});

export default AuthMain;
