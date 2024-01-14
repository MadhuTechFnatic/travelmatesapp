import { View, Text, StatusBar } from "react-native";

const Trips = ({route}) => {

  const {searchText} = route.params

  return (
    <View className="flex-1 items-center justify-center">
        <Text className = 'text-white px-20'>{searchText}</Text>
        <StatusBar style="auto" />
    </View>
  )
}

export default Trips
