/**
 * File: messageCards.ts
 * Project: CardShuffle
 *
 * Description:
 * Defines the message cards displayed by the CardDeck component.
 * Each card contains an image, title, description, and destination screen.
 *
 * Features:
 * - Provides sample message data for the Messages screen.
 * - Includes cowboy-themed sender names and message descriptions.
 * - Associates each card with its corresponding navigation screen.
 * - Uses the CardItem type to ensure consistent card definitions.
 */

import { type CardItem } from "../components/CardDeck";

const messageCards: CardItem[] = [
    {
        id: "1",
        title: "Buck Johnson",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "Howdy partner! You ready for the rodeo Saturday night? Bulls are lookin' mighty mean!"
    },
    {
        id: "2",
        title: "Dusty Rhodes",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "Meet me down at the stockyards at sunrise. We got cattle to move before the heat rolls in."
    },
    {
        id: "3",
        title: "Annie Oakley",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "Don't forget your boots and hat! We're headed to the county fair for some barrel racing."
    },
    {
        id: "4",
        title: "Tex McGraw",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "That bronc nearly threw me clear into next Tuesday! Reckon I'll give him another try once my leg heals."
    },
    {
        id: "5",
        title: "Calamity Jane",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "Y'all better hurry! The chuckwagon's servin' biscuits, gravy, and cowboy coffee."
    },
    {
        id: "6",
        title: "Slim Pickens",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "Found a busted fence along the north pasture. Bring some wire and your trusty pliers."
    },
    {
        id: "7",
        title: "Ruby Wrangler",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "My mare just clocked her fastest barrel run yet! Think we got a shot at that championship buckle."
    },
    {
        id: "8",
        title: "Wyatt Carson",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "There's a big ol' country dance at the saloon tonight. Dust off those boots and come on down!"
    },
    {
        id: "9",
        title: "Sally Spurs",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "The team ropin' starts at 3. Don't be late or you'll miss the best cowboys in the county!"
    },
    {
        id: "10",
        title: "Cody Maverick",
        image: require("../../assets/images/messages.png"),
        screen: "MessageScreen",
        data: "Eight seconds on that bull felt like eight years! But I stayed aboard and took home the buckle!"
    }
];

export default messageCards;