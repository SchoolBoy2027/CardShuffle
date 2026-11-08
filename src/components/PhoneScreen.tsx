/**
 * File: PhoneScreen.tsx
 * Project: CardShuffle
 *
 * Description:
 * Displays the application's Phone screen using the reusable
 * CardDeck component in grid layout (listStyle=false).
 *
 * Features:
 * - Displays phone-related cards using the CardDeck component.
 * - Uses grid layout rather than list layout.
 * - Supports responsive card sizing.
 * - Provides pagination through multiple pages of cards.
 * - Supports interactive card selection.
 */

import { StyleSheet, Text } from "react-native";
import messageCards from "../data/messageCards";
import CardDeck from "./CardDeck";
const PhoneScreen = () => {

  return (
    <>
      <Text style={styles.text}>Make calls from here  </Text>
      <CardDeck cards={messageCards} listStyle={false} />

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

export default PhoneScreen;