/**
 * File: mainCards.ts
 * Project: CardShuffle
 *
 * Description:
 * Defines the main navigation cards displayed by the CardDeck component.
 * Each card contains an image, title, description, and destination screen.
 *
 * Features:
 * - Provides card data for the application's main menu.
 * - Includes Calls, Camera, Messages, Music, and Photos.
 * - Associates each card with its corresponding navigation screen.
 * - Uses the CardItem type to ensure consistent card definitions.
 */

import { type CardItem } from "../components/CardDeck";

const mainCards: CardItem[] = [
    {
        id: "1",
        title: "Calls",
        image: require("../../assets/images/phone.png"),
        screen: "PhoneScreen",
        data:"Use the phone"
    },
    {
        id: "2",
        title: "Camera",
        image: require("../../assets/images/camera.png"),
        screen: "CameraScreen",
        data:"Use the phone"
    },
    {
        id: "3",
        title: "Messages",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data:"Use the phone"
    },
    {
        id: "4",
        title: "Music",
        image: require("../../assets/images/music.png"),
        screen: "MusicScreen",
        data:"Use the phone"

    },
    {
        id: "5",
        title: "Photos",
        image: require("../../assets/images/photo.png"),
        screen: "PhotoScreen",
        data:"Use the phone"

    }
];

// Inside your component's return:
/*
<CardDeck cards={ cards } />
*/
export default mainCards;