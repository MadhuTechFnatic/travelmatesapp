import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'access';
const REFRESH_TOKEN_KEY = 'refresh';
const USER_DATA_KEY = 'travel_mate';

const saveTokens = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    await AsyncStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  } catch (error) {
    console.error('Error saving tokens to AsyncStorage:', error);
  }
};

const getTokens = async () => {
  try {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN_KEY);
    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Error retrieving tokens from AsyncStorage:', error);
  }
};

const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
    return accessToken;
  } catch (error) {
    console.error('Error retrieving access token from AsyncStorage:', error);
  }
};

const removeTokens = async () => {
  try {
    await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
    await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
  } catch (error) {
    console.error('Error removing tokens from AsyncStorage:', error);
  }
};

const saveUserData = async (userData) => {
  try {
    const userDataString = JSON.stringify(userData);
    await AsyncStorage.setItem(USER_DATA_KEY, userDataString);
  } catch (error) {
    console.error('Error saving user data to AsyncStorage:', error);
  }
};

const getUserData = async () => {
  try {
    const userDataString = await AsyncStorage.getItem(USER_DATA_KEY);
    return JSON.parse(userDataString);
  } catch (error) {
    console.error('Error retrieving user data from AsyncStorage:', error);
  }
};

const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_DATA_KEY);
  } catch (error) {
    console.error('Error removing user data from AsyncStorage:', error);
  }
};

const removeAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error removing all data from AsyncStorage:', error);
  }
};

export {
  saveTokens,
  getTokens,
  getAccessToken,
  removeTokens,
  saveUserData,
  getUserData,
  removeUserData,
  removeAllData,
};
