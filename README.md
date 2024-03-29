## Installation

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

4. Install your react navigation type, for Example:

```bash
npm install @react-navigation/stack
```

Reference [here](https://reactnavigation.org/docs/stack-navigator/)

## Usage

1. Sign up or log in to our platform [here](https://app.lezzauth.com/sign-up).

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

6. Set up the `lezzauth` provider in your main app file (e.g., `App.tsx` or `App.js`):

```tsx
// ./App.tsx OR ./App.js
import { LezzAuthProvider } from 'lezzauth/expo';
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
// ./Routes.tsx OR ./Routes.js
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedRoutes, PublicRoutes } from "lezzauth/expo";
import * as React from "react";
import HomePage from './screens/HomePage';
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
                    <Stack.Screen name="SignIn" component={SignInPage} />
                    <Stack.Screen name="SignUp" component={SignUpPage} />
                </Stack.Navigator>
            </PublicRoutes>
        </>
    )
}
```

8. Set up your screens as needed.
   
```tsx
// ./screens/SignInPage.tsx OR ./screens/SignInPage.js
import { SignIn } from "../lezzauth/_generated/components/sign-in"

export default function SignInPage() {
    return <SignIn />
}
```

```tsx
// ./screens/SignUpPage.tsx OR ./screens/SignUpPage.js
import { SignUp } from "../lezzauth/_generated/components/sign-up"

export default function SignUpPage() {
    return <SignUp />
}
```

```tsx
// ./screens/HomePage.tsx OR ./screens/HomePage.js
import { useUser } from 'lezzauth/expo'
import { StatusBar, Text, View } from 'react-native'
import { SignOutButton } from '../lezzauth/_generated/components/sign-in'
import { UserButton } from '../lezzauth/_generated/components/user-button'

export default function HomePage() {
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
