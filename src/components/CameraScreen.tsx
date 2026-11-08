import { type RootStackParamList } from "@/types/navigation";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

const CameraScreen = () => {   

    return (

      <Text style={styles.text}>Welcome to the camera app</Text>
    );
};


const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
});
export default CameraScreen;