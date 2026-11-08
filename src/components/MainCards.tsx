
/**
 * File: MainCards.tsx
 * Project: CardShuffle
 *
 * Description:
 * Primary dashboard for essential phone functions, excluding applications.
 * Uses the CardDeck component to display navigation cards defined in
 * data/mainCards.ts.
 *
 * Features:
 * - Imports dashboard card data from mainCards.ts.
 * - Displays the CardDeck component using the default grid layout.
 * - Provides navigation to Phone, Camera, Messages, Music, and Photos.
 * - Handles card selection through the handleCardPress function.
 * - Redirects invalid screen selections to MainCards.
 * - Displays a three-color linear gradient background.
 */
import type { CardItem } from "@/components/CardDeck";  //must import both the 2B rendered object as
import CardDeck from "@/components/CardDeck";           //well as the type
import mainCards from "@/data/mainCards";               //data structure for dashboard.
import type { RootStackParamList } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";


/**
 * Main Cards is designed to be a primary dashboard for the essential phone functions
 * not including applications when using the CardDeck component for display  
 * the essential data for this page is contained in data mainCards.ts.  
 * @returns 
 */
const MainCards = () => {

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleCardPress = (screen: CardItem["screen"]) => {
        switch (screen) {
            case "PhoneScreen":
                navigation.navigate("PhoneScreen");
                break;

            case "CameraScreen":
                navigation.navigate("CameraScreen");
                break;

            case "MessageScreen":
                navigation.navigate("MessageScreen");
                break;

            case "MusicScreen":
                navigation.navigate("MusicScreen");
                break;

            case "PhotoScreen":
                navigation.navigate("PhotoScreen");
                break;


            default:
                navigation.navigate("MainCards");
                console.log("Invalid screen: " + screen);
                break;
        }
    };
    return (
        <LinearGradient
            colors={["#A67B5B", "#2b2825", "#755a38"]}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
        >


            <CardDeck cards={mainCards} onCardPress={handleCardPress} />
        </LinearGradient>
    );
};

export default MainCards;
