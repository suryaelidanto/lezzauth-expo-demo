import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedRoutes, PublicRoutes } from "lezzauth/expo";
import * as React from "react";
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';

export function Routes() {
    const Stack = createStackNavigator()

    return (
        <>
            <AuthenticatedRoutes>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Home" component={HomePage} />
                </Stack.Navigator>
            </AuthenticatedRoutes>
            <PublicRoutes>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="SignIn" component={SignInPage} />
                </Stack.Navigator>
            </PublicRoutes>
        </>
    )
}
