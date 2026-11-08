/**
 * File: MessageScreen.tsx
 * Project: CardShuffle
 *
 * Description:
 * Displays the application's Messages screen using the reusable
 * CardDeck component and message data defined in messageCards.ts.
 *
 * Features:
 * - Imports message data from messageCards.ts.
 * - Displays message cards using the CardDeck component.
 * - Uses list layout for displaying messages.
 * - Supports vertical scrolling through the message collection.
 * - Displays message sender information and descriptions.
 */
import { StyleSheet, Text } from "react-native";
import messageCards from "../data/messageCards";
import CardDeck from "./CardDeck";


const MessageScreen = () => {
  return (
    <>
      <Text style={styles.text}>Welcome to your Messages </Text>
      <CardDeck cards={messageCards} listStyle={true} />
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
export default MessageScreen;