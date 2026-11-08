
/**
 * File: CardDeck.tsx
 * Project: CardShuffle
 *
 * Description:
 * Reusable card display component supporting grid and list layouts.
 * Provides responsive card sizing, interactive navigation, pagination,
 * and vertical scrolling.
 *
 * Features:
 * - Displays cards containing images, titles, and descriptions.
 * - Supports grid and list display modes.
 * - Automatically adjusts card dimensions to screen size.
 * - Provides Previous and Next pagination for grid layouts.
 * - Enables vertical scrolling for list layouts.
 * - Handles card selection through an optional callback.
 *
 * Props:
 * cards       - Array of CardItem objects to display.
 * listStyle   - Enables list layout when true.
 * onCardPress - Optional callback invoked when a card is selected.

 */
import { useState } from "react";
import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
    type ImageSourcePropType
} from "react-native";


import type { RootStackParamList } from "@/types/navigation";

interface CardItem {
    id: string;
    title: string;
    image: ImageSourcePropType;
    screen: keyof RootStackParamList;
    data?: string;
}

//
interface CardDeckProps {
    cards: CardItem[];
    onCardPress?: (screen: CardItem["screen"]) => void;
    listStyle?: boolean;
    cardsPerPage?: number;
}
/**
 * CardDeck component is designed to be a reusable dashboard component
 * with the caller or parent providing the data and navigation event 
 * @param cards         Card array defined in data or parent
 * @param onCardPress   Navigation event handler pointer passed to here.  
 * @param listStyle     list for true or Grid when false, Grid default 
 * @param cardsPerPage  # of cards to display on page before scrolling and swiping 
 * @returns displayed cards in a grid layout 
 */

const CardDeck = ({ cards, onCardPress = () => { }, listStyle = false, cardsPerPage = 6 }: CardDeckProps) => {

    const [currentPage, setCurrentPage] = useState<number>(0);
    const { width, height } = useWindowDimensions();

    let visibleCards = cards;

    if (!listStyle) {
        const startIndex = currentPage * cardsPerPage;
        visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);
    }

    const totalPages = Math.ceil(cards.length / cardsPerPage);


    const containerPadding = 20;

    let numColumns = 1;

    let cardWidth = width - containerPadding;
    let cardHeight = (height - (containerPadding * 4)) / cardsPerPage;
    let imageHeight = cardHeight - 10;

   if (!listStyle) {
    numColumns = width > height ? 6 : 2;
    cardHeight = (height - containerPadding * 10) / (cardsPerPage / numColumns);
    imageHeight = cardHeight - 70;
    cardWidth = (width - containerPadding - ((numColumns - 1) * containerPadding)) / numColumns;
}

    /**
     * renderCard = ({ item }: { item: CardItem })
     * @param param0 
     * @returns 
     */
    const renderCard = ({ item }: { item: CardItem }) => {
        return (
            <Pressable
                style={[
                    styles.card,
                    listStyle && styles.listCard,
                    { width: cardWidth, height: cardHeight }
                ]}
                onPress={() => onCardPress(item.screen)}
            >
                <Image
                    source={item.image}
                    style={[
                        !listStyle && styles.cardImage,
                        listStyle && styles.listImage,
                        { height: imageHeight },

                    ]}
                    resizeMode="contain"
                />
                <View>
                    <Text style={[
                        !listStyle && styles.cardTitle,
                        listStyle && styles.listTitle,
                    ]}>
                        {item.title}
                    </Text>

                    {item.data && listStyle && (
                        <Text style={[
                            listStyle && styles.listData,
                        ]}>
                            {item.data}
                        </Text>
                    )}
                </View>
            </Pressable>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                key={numColumns}
                data={visibleCards}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                numColumns={numColumns}
                columnWrapperStyle={numColumns > 1 ? styles.cardRow : undefined}
                contentContainerStyle={styles.cardGrid}
                scrollEnabled={listStyle}
            />

            {!listStyle && totalPages > 1 && (
                <View style={styles.pagination}>
                    <Pressable
                        style={[
                            styles.paginationButton,
                            currentPage === 0 && { opacity: 0 }
                        ]}
                        disabled={currentPage === 0}
                        onPress={() => setCurrentPage(currentPage - 1)}
                    >
                        <Text style={styles.paginationButtonText}>Previous</Text>
                    </Pressable>

                    <Text style={styles.pageText}>
                        Page {currentPage + 1} of {totalPages}
                    </Text>

                    <Pressable
                        style={[
                            styles.paginationButton,
                            currentPage === totalPages - 1 && { opacity: 0 }
                        ]}
                        disabled={currentPage === totalPages - 1}
                        onPress={() => setCurrentPage(currentPage + 1)}
                    >
                        <Text style={styles.paginationButtonText}>Next</Text>
                    </Pressable>
                </View>
            )}

        </View>
    );
};

/**
 * Styling for the above
 */
const styles = StyleSheet.create({



    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "transparent"      /* set to transparent since we want the background image to show */
    },

    pagination: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "transparent"      /* set to transparent since we want the background image to show */

    },

    paginationButton: {
        backgroundColor: "transparent",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    paginationButtonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    },

    pageText: {
        color: "white",
        fontSize: 16
    },



    cardGrid: {
        paddingBottom: 10
    },

    cardRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 15
    },

    card: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        padding: 15,
        elevation: 3
    },

    cardImage: {
        width: "100%",
        height: "80%",
        borderRadius: 5,
        marginBottom: 1
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
        color: "white"
    },

    cardData: {
        fontSize: 14,
        color: "white"
    },

    listCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },

    listImage: {
        width: "20%",
        height: "90%",
        marginTop: 1,
        borderRadius: 5,
        marginBottom: 1,
    },

    listTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 1,
        textAlign: "left",
        color: "white"
    },

    listData: {
        width: "45%",
        fontSize: 14,
        color: "white",
    },

});

export type { CardItem }; //Have to import this seperately from the default export
export default CardDeck;        
