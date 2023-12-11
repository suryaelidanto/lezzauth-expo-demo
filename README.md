# Installation :

## Using NPM
```bash
npm install lezzauth
```

## Using YARN
```bash
yarn add lezzauth
```

Because for now we still using react navigation, please install this to make it work ✨ : 

```bash
npx expo install @react-native-community/masked-view react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens
```

And then you can start your expo project

```bash
npx expo start -c 
```

Note : `-c` just to make sure no weird cache there

OR, you can run it with build version too

```bash
npx expo run:android
```

Setting your package name (for redirect purposes) : 
```json
{
  "expo": {
    "name": "lezzauthexpodemo",
    "slug": "lezzauthexpodemo",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
    for example ->  "package": "com.suryaelidanto.lezzauthexpodemo"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "scheme": "myapp"
  }
}
```

