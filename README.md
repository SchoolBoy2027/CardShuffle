# Welcome to the Card Shuffle app 👋

This is an [Expo](https://expo.dev) project created with [create-expo-app](https://www.npmjs.com/package/create-expo-app).

It is homework #4 and also project prep to create a reusable Grid or list component that was multi-purpose for displaying text messages, photos or creating a dashboard or home screen.


# CardShuffle

**CardShuffle** is a mobile application developed using **React Native, Expo, and TypeScript**. The application features a card-based user interface that provides navigation to different screens and application features.

## Features

- **Card-Based Navigation:** Interactive cards provide access to application screens.
- **Responsive Layout:** Card dimensions adjust to different screen sizes.
- **Grid and List Views:** Supports both grid-based and list-based card displays.
- **Pagination:** Previous and Next buttons allow navigation through multiple pages of cards.
- **Scrollable Lists:** Supports vertically scrolling card collections.
- **Multiple Screens:** Includes Calls, Camera, Messages, Music, and Photos.
- **Custom Styling:** Consistent colors, images, and navigation elements.

## Technologies

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Router

## Installation

Clone the GitHub repository and install dependencies:

bash
git clone https://github.com/USERNAME/CardShuffle.git
cd CardShuffle
npm install


## Running the Application

Start the Expo development server:

bash
npx expo start


To launch the application in an Android emulator:

bash
npx expo start --android


## Project Structure

- app/ — Application entry point and Expo Router layout.
- src/components/ — Reusable components and application screens.
- src/navigation/ — Navigation types and configuration.
- assets/ — Application images and icons.

## Development

CardShuffle is designed as a modular React Native application. Its reusable CardDeck component supports multiple display configurations, allowing additional screens and functionality to be incorporated as the application evolves.


## General Expo instructions


## Get started

1. Install dependencies

   bash
   npm install
   

2. Start the app

   bash
   npx expo start
   

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **src/app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

bash
npm run reset-project


This command will move the starter code to the **example** directory and create a blank **src/app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run npx expo lint, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
