import { PermissionsAndroid, Platform } from "react-native";

export const requestStoragePermission = async () => {
  if (Platform.OS === "android" && Platform.Version < 29) {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
      title: "Storage Permission Required",
      message: "This app needs access to your storage to download PDF reports.",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "Ok"
    });
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
};
