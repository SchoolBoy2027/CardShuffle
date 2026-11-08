
import { type RootStackParamList } from "@/types/navigation";
import { useState } from "react";


import { StyleSheet, Text } from "react-native";

const MusicScreen = () => {   
    return (
     <>
      <Text style={styles.text}>Welcome to the Music Selection Screen</Text>
    
    </>
    );
};


const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
});
export default MusicScreen;
