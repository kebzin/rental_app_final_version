// Importing necessary modules
import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";
import "react-native-url-polyfill/auto";

// Creating an adapter for Expo Secure Store
const ExpoSecureStoreAdapter = {
  getItem: (key) => SecureStore.getItemAsync(key),
  setItem: (key, value) => SecureStore.setItemAsync(key, value),
  removeItem: (key) => SecureStore.deleteItemAsync(key),
};

// Setting Supabase URL and anonymous key
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

// Creating a Supabase client with the given URL, anonymous key, and authentication options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter, // Using the Expo Secure Store adapter for storage
    autoRefreshToken: true, // Automatically refreshes the token when it expires
    persistSession: true, // Persists the session even after the app is closed
    detectSessionInUrl: false, // Disables detecting session in the URL
  },
});
