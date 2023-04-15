# RN Todo List Sumary

## Demo on Android

-   [Todo list Demo](https://drive.google.com/file/d/1lFDe9t7o7HuwC7VwF8-3Zj4Ujq3zL6_1/view?usp=sharing)

## App sumary

-   Login Screen
    Base on [Wallet connect sample](https://github.com/WalletConnect/react-native-examples/tree/main/dapps/v2Explorer), I built an application that can log in by connecting to some available supported wallets (Trust wallet, Rainbow, Safe, Argent, ...) via `Universal Provider`, and also can get information of that wallet (wallet address, balances, ...)
-   Home Screen
    We can use 3 features of Todo app on this screen: `Add new Todo Item`, `Listing Todo Item`, `Disconnect wallet` and store it to mobile LocalStorage

## Tech sumary

State management
In my app, I used:

-   Redux-saga: to manage (get, update) state of global data of app, such as: Todo data, Wallet information. Because it allows us to easyly interact with resources inside/outside of itself asynchronously, executing I/O operations, we can use resources everywhere we want to use.
-   Context: to manage state of authentication. My aim when use context is share state between deeply nested components more easily than with useState alone, and we can centrally control authentication, navigation operations here.

## Struture sumary

Except generic folders (utils, scripts, screens, assets), I divided app by modules. In each modules (app, auth, common), it has the same descent folders (redux, components, contexts, services, types). I have divided the folders as above for the purpose of isolating them into separate parts so as not to affect, depend too much on each other when maintaining, or in the future, the module needs to be replaced, it can be replaced in an easier way without affecting other parts.
For example, we don't need login with Wallet anymore, so we can replace it with Cognito Login, and so on.

## Unit test and end-to-end testing.

-   Unit test
    I used `jest` to make simple unit test.
    In the future, I will write test cases cover the Utils functions, Hook functions, and make sure each component can render in the right way
-   E2E test
    Have not done
    Future plan, I will use Detox Framework to test below flow:

```
- Connect with Wallet on Login Screen
-> Get Todo list from DB, and return with BE, then list on Home Screen
-> Add new Todo and save it to DB
-> Disconnect
```

## Run app Guidance

-   Ensure your React Native environment has been properly setup (XCode, ruby etc). Note for Mac users to have the correct Ruby versions if doing a fresh install.
-   Read through our JS-React Native guide
-   Clone source code from [Github](https://github.com/VTTruong287/RN-Todo-Listing-App/tree/dev)
-   Setup `.env` file with `ENV_PROJECT_ID` attribute from https://cloud.walletconnect.com/
-   Run `yarn` or `npm install`

### Setup (iOS)

If CocoaPods is not installed on your system yet:

```
brew install cocoapods
```

Install iOS deps:

```
cd ios
pod install
```

To run:

```
npx react-native run-ios
```

### Setup (Android)

Follow [the official Environment Setup guidance](https://reactnative.dev/docs/environment-setup) for Android (select `Android` for `Target OS`) to install Android Studio etc.
Set up either a virtual or physical device as outlined in the Preparing the Android device section of the guidance.
To run:

```
npx react-native run-android
```
