import React from "react";
import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import downloadReport from "../components/downloadReport";

const backgroundImage = require("../assets/images/logo.jpg");

const HomeScreen: React.FC = () => {
  const getPermission = async () => {
    await downloadReport();
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(138, 125, 254)",
            padding: 16,
            margin: 20,
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={getPermission}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Download</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
