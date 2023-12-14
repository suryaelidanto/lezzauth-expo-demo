import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedRoutes, PublicRoutes } from "lezzauth/expo";
import * as React from "react";
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PartialSignUpPage } from './pages/PartialSignUpPage';
import { PartialSignInPage } from './pages/PartialSignInPage';

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
                    <Stack.Screen name="SignIn" component={PartialSignInPage} />
                    <Stack.Screen name="SignUp" component={PartialSignUpPage} />
                </Stack.Navigator>
            </PublicRoutes>
        </>
    )
}
