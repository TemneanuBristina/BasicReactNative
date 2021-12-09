# Basic react-native project
This project is meant to be an out-of-the box example of react-native app that can be run on a mobile device or emulator.

## Installation
Please perform the installation steps described [here](https://reactnative.dev/docs/environment-setup) (check 
`React Native CLI Quickstart` tab, and select your development OS and `Android` as target OS). Make sure you 
have a good internet connection, this will download several GB and take ~1h.
In short:
- install latest JDK
- install [node js](https://nodejs.org) and [npm](https://www.npmjs.com/)
- install [Android Studio](https://developer.android.com/studio/index.html)
- configure Android Studio:
  1) Tools => SDK Manager => Android SDK Location => install Android SDK (next, next, etc). 
     For Windows, this will install the SDK package at location `C:\Users\[username]\AppData\Local\Android\Sdk`
  
  2) Tools => SDK Manager => SDK Platform => check box "Show Package Details", then select     
     * Android SDK Platform 29
     * Google APIs Intel x86 Atom System Image 

     Also, deselect any other SDK platform version that was installed by default (for example, Android SDK 31)
     
  3) Tools => SDK Manager => SDK Tools => check box "Show Package Details", then select "29.0.2" under 
     "Android SDK Build-Tools" entry
     
     Also, deselect any other build tool that was installed by default.
     
  4) Set user environment variables:
     * set ANDROID_HOME to `C:\Users\[username]\AppData\Local\Android\Sdk`
     * set ANDROID_SDK_ROOT to `C:\Users\[username]\AppData\Local\Android\Sdk`
     * add `%LOCALAPPDATA%\Android\Sdk\platform-tools` as entry to PATH
     
  5) Create a Virtual Device: Tools => AVD Manager => Create virtual device => select the screen size => 
     Next, download Release Name Q (API version) 29, Next, Finish

## Running the application
Clone this project in your folder.
Start `cmd` as administrator, move to project folder, enter command `npx react-native run-android`.
Let this run in its own window, open another `cmd` as administrator and run `npx react-native run-android`