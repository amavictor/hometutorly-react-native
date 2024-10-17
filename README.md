# React Native Setup and Run Guide

This project was started using **React Native CLI (latest version: 0.75)** and requires you to have the latest version of React Native installed.

### Prerequisites
- **Node.js** (v21.4.0+)
- **Yarn** (Ama's preferred package manager)
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)
- **React Native CLI** (to run the commands)

---

### Running the Application

#### 1. Starting the Metro Bundler
To get started, clone the git repository
```bash
git clone https://github.com/amavictor/hometutorly-react-native.git
```
cd into the project and run 

```bash
yarn install
```


To start the Metro bundler:
```bash
yarn start
```

This will initialize the Metro bundler, which compiles the JavaScript code and assets. Please ensure you have **Android Studio** and **Xcode** installed on your computer.

### iOS Setup & Run
---
#### 2. Running the App on iOS

After running yarn start, follow these steps to start the app on iOS:
- Press **i** in the terminal to select iOS, or alternatively, you can manually open the project in **Xcode**:
  1. Open the project in Xcode.
  2. Select your preferred emulator from the device dropdown in Xcode.
  3. Click the Run button (the top arrow button) to build and start the project.

Once the app builds successfully, return to the terminal where you started Metro and type i again to open the iOS version of the app on the selected emulator.

### iOS Setup & Run

#### 3. Running the App on Android
To run the app on Android, press **a** in the terminal after running yarn start.
If you encounter any issues regarding the Android emulator or React Native setup, here are steps to troubleshoot the issue:

You might encounter this **Error: react-native-reanimated configuration error** on android.

```bash
A problem occurred configuring project ':react-native-reanimated'.
```

To fix this issue, follow these steps:

 1. **Ensure proper versioning**: Make sure that your react-native-reanimated version is compatible with your React Native version. Check the official React Native Reanimated documentation for the correct version.

 2. **Ensure proper versioning**: Make sure that your react-native-reanimated version is compatible with your React Native version. Check the official React Native Reanimated documentation for the correct version.

 3. **Clean the Android build**: Sometimes, cached build files can cause this issue. Run the following command to clean the Android build:
```bash
cd android && ./gradlew clean
```
 4. **Posible SDK issue**: To fix this SDK/NDK issue, should this error ever arise;

- Navigate to **SDK Manager** in Android Studio.
- Go to the **SDK Tools** tab.
- Ensure that the **NDK (Side by side)** is selected and downloaded. 
- Ensure that **CMake** is also selected and installed.
- Download the latest versions of both.


Thanks for reviewing my submission! 🎉