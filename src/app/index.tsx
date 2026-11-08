
/**
 * File: index.tsx
 * Project: CardShuffle
 *
 * Description:
 * Main application entry point responsible for configuring screen
 * navigation and displaying the application's card-based interface.
 *
 * Features:
 * - Configures the application's Stack.Navigator.
 * - Establishes MainCards as the initial screen.
 * - Registers application screens and their components.
 * - Provides navigation between application screens.
 * - Defines common navigation header styles and settings.
 * - Configures screen backgrounds and navigation options.
 */
import {
    NavigationContainer,
    NavigationIndependentTree
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

import { type RootStackParamList } from "@/types/navigation";

import CameraScreen from "@/components/CameraScreen";
import MainCards from "@/components/MainCards";
import MessageScreen from "@/components/MessageScreen";
import MusicScreen from "@/components/MusicScreen";
import PhoneScreen from "@/components/PhoneScreen";
import PhotoScreen from "@/components/PhotoScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = () => {

    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <LinearGradient
                    colors={["#E8D5BE", "#383129", "#A67B5B"]}
                    locations={[0, 0.5, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{ flex: 1 }}
                >
                    <Stack.Navigator
                        initialRouteName="MainCards"
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: "#A67B5B"
                            },
                            headerTintColor: "#FFFFFF",
                            headerTitleAlign: "center",
                            headerBackButtonDisplayMode: "default",
                            contentStyle: {
                                backgroundColor: "transparent"
                            }
                        }}
                    >
                        <Stack.Screen
                            name="MainCards"
                            component={MainCards}
                            options={{ title: "Main" }}
                        />

                        <Stack.Screen
                            name="PhoneScreen"
                            component={PhoneScreen}
                            options={{ title: "Make calls from here" }}
                        />

                        <Stack.Screen
                            name="CameraScreen"
                            component={CameraScreen}
                            options={{ title: " Welcome to the camera app" }}
                        />

                        <Stack.Screen
                            name="PhotoScreen"
                            component={PhotoScreen}
                            options={{ title: "Welcome to the Photos Screen" }}
                        />

                        <Stack.Screen
                            name="MusicScreen"
                            component={MusicScreen}
                            options={{ title: "Welcome to the Music Selection Screen" }}
                        />
                        <Stack.Screen
                            name="MessageScreen"
                            component={MessageScreen}
                            options={{ title: "Welcome to your Messages" }}
                        />

                    </Stack.Navigator>
                </LinearGradient>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};

export default HomeScreen;
