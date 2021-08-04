import { AsyncStorage } from "react-native";

export async function saveLoginName(name) {
  try {
    await AsyncStorage.setItem("LOGIN_NAME", name);
  } catch (error) {
    // Error saving data
  }
}

export async function saveAccessToken(token) {
  try {
    await AsyncStorage.setItem("ACCESS_TOKEN", token);
  } catch (error) {
    // Error saving data
  }
}

export async function saveRefreshToken(token) {
  try {
    return await AsyncStorage.setItem("REFRESH_TOKEN", token);
  } catch (error) {
    // Error retrieving data
  }
}

export async function getAccessToken() {
  try {
    return await AsyncStorage.getItem("ACCESS_TOKEN");
  } catch (error) {
    // Error retrieving data
  }
}

export async function getRefreshToken() {
  try {
    return await AsyncStorage.getItem("REFRESH_TOKEN");
  } catch (error) {
    // Error retrieving data
  }
}

export async function getLoginName() {
  try {
    return await AsyncStorage.getItem("LOGIN_NAME");
  } catch (error) {
    // Error retrieving data
  }
}
