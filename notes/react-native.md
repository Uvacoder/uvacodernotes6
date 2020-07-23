# React Native

## General thoughts

- We write code like React, but using different components and minding two types of interfaces: iOS and Android. They each have their own ways of doing the same thing.
- Div = `<View />`
- text = `<Text />`
- RN has a built-in icon library (`vector-icons`)
- There are many types of buttons, like `<TouchableOpacity />` or `<TouchableHighlight />`

## Debugging, emulation

- Using Expo you can do it on your phone or in an emulated device using Genymotion
- Make sure Android version of the emulated device is recent, otherwise you will run into an `adb: cannot reverse` error.
- On a Windows machine, there is no way to emulate an iOS device.
- There is a whole set of debugging tools available to us. One of the most useful is the Perf Monitor: especially to keep our UI and JS threads close to 60.
- We can debug in the browser as well, and use console.log() and other tricks we use while building webs.

## Specific components

- For lists, we cannot map over like we do in React. We will use `ScrollView` and `FlatList`. The difference is that `FlatList` is more performat than `ScrollView`, usually used for larger data sets. Why? Because `FlatList` renders items lazily to save memory and has other performance optimizations.

## Platform specific code

- We always need to think about the user and the UX. Apple and Google have different design guidelines and users of both are used to things happening in a specific way.
- To conditionally specify how things will work in iOS or Android, we have to use the `Platform` module. [Click here](https://facebook.github.io/react-native/docs/platform-specific-code) for more info.