import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { InputField } from "../../components/common";
import { COLORS, FONTS, SIZES, icons } from "../../constants";

const Onboading = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <StatusBar style="auto" />
      <Onboarding
        showSkip={false}
        containerStyles={{
          justifyContent: "center",
          backgroundColor: COLORS.grey20,
          height: SIZES.height,
        }}
        pages={[
          {
            backgroundColor: COLORS.light,
            image: (
              <View
                style={{ width: SIZES.width, paddingHorizontal: SIZES.padding }}
              >
                <Text style={{ ...FONTS.h2 }}>Complete Your Profile</Text>
                <Text
                  style={{
                    ...FONTS.body5,
                  }}
                >
                  Enter your phone number
                </Text>
                <InputField
                  onChange={(text) => setPhone(text)}
                  value={phone}
                  inputContainerStyle={{
                    backgroundColor: COLORS.light,
                  }}
                  prependComponent={
                    <Image
                      source={icons.phone}
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: SIZES.base,
                        tintColor: COLORS.primary,
                      }}
                    />
                  }
                  containerStyle={{
                    marginTop: 1,
                    paddingVertical: SIZES.padding,
                  }}
                  Placeholder={"+220  Phone number"}
                />
              </View>
            ),
            title: "",
            subtitle: "",
          },
          {
            backgroundColor: "#fff",
            image: <Text>Onboading</Text>,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </>
  );
};

export default Onboading;
