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