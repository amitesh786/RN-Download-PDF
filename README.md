# React Native PDF Downloader
A minimal React Native app to download and preview PDF files with a full-screen background image.

This app demonstrates:
- A full-screen background image
- A single `Download` button that downloads a PDF file to the device

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Screenshot](#screenshot)
- [Commands](#additional-commands)
- [Notes](#notes)
- [Setup](#setup)
- [Author](#author)

## Features
- Beautiful full-screen background image using ImageBackground
- Tap-to-download PDF file via RNFetchBlob
- Compatible with both iOS and Android
- Android download uses the native Download Manager
- iOS download opens and previews the file directly

## Requirements:
Make sure you have the following installed:
- Node.js & npm: `https://nodejs.org`
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (sudo gem install cocoapods)

## Installation
## Step 1: Install the package
- Go to root Folder: `npm i` or `npm install`.
- Go to iOS folder and execute `pod install` or `pod install --repo-update`.

## Step 2: Start the metro server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native. To start Metro, run the following command from the _root_ of your React Native project: `npm run start`.

- For iOS: `npm run start`, sync with Xcode. After execute the command it will open the emulator app.
- For Android: To run the project on Android emulator you have to connect your device with USB or open any emulator via Android Studio in AVD Manager and run the following command: `react-native run-android`.

## Step 3: Start your application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

- For iOS: `npm run ios`.
- For Android: `npm run android`.

If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ or _Android Emulator_  shortly provided you have set up your simulator/emulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Build the package to deploy

- For iOS: `npm run ios:build-simulator`, upon successful completion, the build will be located in the following directory: `ios/build/Build/Products/Release-iphonesimulator/`.

- For Android: `npm run android:build`, upon successful completion, the build will be located in the following directory: `android/app/build/outputs/apk/release/`. Locate the file named `app-release.apk`.

## Step 5: iOS and Android app screen recorded on screenshot folder which is present on the root

Store the screen recordings in the designated screenshot folder located at the root directory. Use the following subdirectories for their respective platforms:
- For iOS : [Watch iOS Recording](./screenshots/iOS_16.mov).

## Step 6: Additional Commands

### Testing (Jest)
- To run the tests in the application: `npm run test`
- To run tests in watch all mode: `npm run test:watch`

### Linting
- To check for linting issues: `npm run lint`

### Formatting
- To format the codebase using Prettier: `npm run format`

### Cleaning
- To clean and reinstall node modules: `npm run clean`
- To clean node modules and build directories for Android and iOS: `npm run clean:all`

## Screenshot
- iOS (DownloadPDF recording): `screenshots/iOS_16.mov`

## Notes
- The PDF is downloaded using `rn-fetch-blob`
- On Android, permission is requested at runtime (`WRITE_EXTERNAL_STORAGE`)
- On iOS, the file is previewed after being written to the device
- The background image is located in `assets/images/logo.jpg`

## Setup
To run the project locally:
- Clone the repository: `git clone https://github.com/amitesh786/RN-Download-PDF.git`
- cd RN-Download-PDF

## Author
- Developed by Amitesh Singh | © 2025
- Feel free to contribute or suggest improvements!
