import { View, Text, StatusBar } from "react-native";

const Chats = () => {
  return (
    <View className="flex-1 items-center justify-center bg-sky-400">
        <Text className = 'text-white bg-black px-20'>Chats</Text>
        <StatusBar style="auto" />
    </View>
  )
}

export default Chats
