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