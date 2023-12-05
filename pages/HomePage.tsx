import { useUser } from 'lezzauth/expo'
import { StatusBar, Text, View } from 'react-native'
import { SignOutButton } from '../lezzauth/_generated/components/sign-in'

export function HomePage({ navigation }) {
    const { user } = useUser()

    return (
        <View style={{
            marginTop: StatusBar.currentHeight || 0,
        }}>
            <Text>Welcome, {`${user.firstName || ""}  ${user.lastName || ""}`}</Text>
            <Text>Your profile data :</Text>
            <Text>ID : {user.id}</Text>
            <Text>Email : {user.email}</Text>
            <SignOutButton>Keluar</SignOutButton>
        </View>
    )
}