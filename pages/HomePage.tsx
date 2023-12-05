import { View, Button, Text, StatusBar } from 'react-native'
import { useUser, useLezzAuth } from 'lezzauth/expo'
import { SignOutButton } from '../lezzauth/_generated/components'

export function HomePage({ navigation }) {
    // const { signOut } = useLezzAuth()
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
            {/* <Button onPress={() => signOut()} title='Sign out' /> */}
        </View>
    )
}