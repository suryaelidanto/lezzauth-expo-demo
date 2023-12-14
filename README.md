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


## Problem : Google button not working

You must set up your `app.json` first 

Setting your `package` name, `intentFilters` (for google signin), and the `scheme` (just make it same as your app name), in here im naming it as `"package": "com.suryaelidanto.lezzauthexpodemo"`, `"scheme": "lezzauthexpodemo"` : 
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
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.suryaelidanto.lezzauthexpodemo"
    },
    "intentFilters": [
      {
        "autoVerify": true,
        "action": "VIEW",
        "data": {
          "scheme": "lezzauthexpodemo",
          "host": "com.suryaelidanto.lezzauthexpodemo"
        },
        "category": [
          "BROWSABLE",
          "DEFAULT"
        ]
      }
    ],
    "scheme": "lezzauthexpodemo"
  }
}
```

And, lastly you should run it with build version :  

```bash
npx expo run:android
```
