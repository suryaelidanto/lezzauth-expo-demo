# Installation

1. Ensure you have Expo CLI installed. If not, install it by running:

```bash
npm i -g expo-cli
```
2. Install `lezzauth` package:

```bash
npm install lezzauth
```

3. Install necessary dependencies for your app to work seamlessly with `lezzauth`:

```bash
npx expo install @react-native-community/masked-view react-native-gesture-handler react-native-reanimated react-native-safe-area-context react-native-screens
```

## Usage

1. Sign up or log in to our platform [here](https://app-stg.lezzauth.com/sign-up).

2. Create an application on the dashboard and copy the API KEY from the `Expo` section.

3. Place the API KEY inside your `.env` file.

4. Log in to our platform using:

```bash
npx lezzauth login
```

Note: If you use OAuth to log in (e.g., Google OAuth), set your password in the platform -> user settings -> set password, then try login again

5. Generate components for your app:
```bash
npx lezzauth dev
```

6. Set up the `lezzauth` provider in your main app file (e.g., `App.js` or `App.tsx`):

```tsx
import { LezzAuthProvider } from 'lezzauth/expo';
import React from 'react';
import { Routes } from './Routes';

export default function App() {
  return (
    <LezzAuthProvider publishableKey={process.env.EXPO_PUBLIC_LEZZAUTH_PUBLISHABLE_KEY!}>
      <Routes />
    </LezzAuthProvider>
  );
};
```

7. Configure your routes:

```tsx
// ./Routes.js OR ./Routes.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedRoutes, PublicRoutes } from "lezzauth/expo";
import * as React from "react";
import HomePage  from './screens/HomePage';
import SignInPage from './screens/SignInPage';
import SignUpPage from './screens/SignUpPage';

export function Routes() {
    const Stack = createStackNavigator()

    return (
        <>
            <AuthenticatedRoutes>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomePage} />
                </Stack.Navigator>
            </AuthenticatedRoutes>
            <PublicRoutes>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SignIn" component={PartialSignInPage} />
                    <Stack.Screen name="SignUp" component={PartialSignUpPage} />
                </Stack.Navigator>
            </PublicRoutes>
        </>
    )
}
```

8. Set up your screens as needed.
   
```tsx
// ./screens/SignInPage.js OR ./screens/SignInPage.tsx
import { SignIn } from "../lezzauth/_generated/components/sign-in"

export function SignInPage() {
    return <SignIn />
}
```

```tsx
// ./screens/SignUpPage.js OR ./screens/SignUpPage.tsx
import { SignUp } from "../lezzauth/_generated/components/sign-up"

export function SignUpPage() {
    return <SignUp />
}
```

```tsx
// ./screens/HomePage.js OR ./screens/HomePage.tsx
import { useUser } from 'lezzauth/expo'
import { Text, View } from 'react-native'
import { SignOutButton } from '../lezzauth/_generated/components/sign-in'
import { UserButton } from '../lezzauth/_generated/components/user-button'

export function HomePage() {
    const { user } = useUser()

    return (
        <View style={{
            marginTop: StatusBar.currentHeight || 0,
            paddingHorizontal: 10,
        }}>
            <View style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row"
            }}>
                <Text>Welcome, {`${user.firstName || ""}  ${user.lastName || ""}`}</Text>
                <UserButton />
            </View>

            <Text>Your profile data :</Text>
            <Text>ID : {user.id}</Text>
            <Text>Email : {user.email}</Text>
            <SignOutButton style={{ marginTop: 20 }}>LOGOUT</SignOutButton>
        </View>
    )
}
```

9. Start your Expo project with the following command:

```bash
npx expo start -c 
```

Note: The -c flag is used to clear the cache for smooth app execution.

## Issue : Google Button Not Working

You must set up your `app.json` 

Set your `package` name, `intentFilters`, and the `scheme`, in here we naming it as `"package": "com.lezzauth.lezzauthexpodemo"`, `"scheme": "lezzauthexpodemo"` : 

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
      "package": "com.lezzauth.lezzauthexpodemo"
    },
    "intentFilters": [
      {
        "autoVerify": true,
        "action": "VIEW",
        "data": {
          "scheme": "lezzauthexpodemo",
          "host": "com.lezzauth.lezzauthexpodemo"
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

Finally, run the build version:

```bash
npx expo run:android
```
