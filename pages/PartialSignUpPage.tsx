import { View } from "react-native"
import { EmailInput, EmailLabel, GoogleButton, PasswordInput, PasswordLabel, Button as SignUpButton, SignUpContainer, SignUpProvider } from "../lezzauth/_generated/components/sign-up"

export function PartialSignUpPage() {
    return (
        <SignUpProvider>
            <SignUpContainer>
                <View style={{ marginTop: 16 }}>
                    <EmailLabel />
                    <EmailInput />
                </View>

                <View style={{ marginTop: 16 }}>
                    <PasswordLabel />
                    <PasswordInput />
                </View>

                <View style={{ marginTop: 16 }}>
                    <SignUpButton />
                </View>
            </SignUpContainer>
        </SignUpProvider>
    )
}