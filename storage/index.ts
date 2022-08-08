import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (e: any) {
    console.log(e.message);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (e: any) {
    console.log(e.message);
  }
};

export const containsKey = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    if (keys.includes(key)) {
      return true;
    }
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

export const removeItem = async (key: string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};
