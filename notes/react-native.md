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

## Specific components

- For lists, we cannot map over like we do in React. We will use `ScrollView` and `FlatList`. The difference is that `FlatList` is more performat than `ScrollView`, usually used for larger data sets. Why? Because `FlatList` renders items lazily to save memory.