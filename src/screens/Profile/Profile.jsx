import { View, Text, StatusBar } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-sky-400">
        <Text className = 'text-white bg-black px-20'>Profile</Text>
        <StatusBar style="auto" />
    </View>
  )
}

export default Profile
