
import { StyleSheet, Text } from "react-native";

const PhotoScreen = () => {   
  return (

    <Text style={styles.text}>Welcome to the Photos Screen</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
});
export default PhotoScreen;
