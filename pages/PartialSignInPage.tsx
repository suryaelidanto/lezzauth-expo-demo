import { View } from "react-native"
import { EmailInput, EmailLabel, GoogleButton, PasswordInput, PasswordLabel, Button as SignInButton, SignInContainer, SignInProvider } from "../lezzauth/_generated/components/sign-in"

export function PartialSignInPage() {
    return (
        <SignInProvider>
            <SignInContainer>
                <View style={{ marginTop: 16 }}>
                    <EmailLabel />
                    <EmailInput />
                </View>

                <View style={{ marginTop: 16 }}>
                    <PasswordLabel />
                    <PasswordInput />
                </View>

                <View style={{ marginTop: 16 }}>
                    <SignInButton />
                </View>
            </SignInContainer>
        </SignInProvider>
    )
}