import React from "react";
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { supabase } from "../../config/superbase";

export const GoogleSignButton = () => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId: "YOUR CLIENT ID FROM GOOGLE CONSOLE",
  });

  return <div>GoogleSignButton</div>;
};
