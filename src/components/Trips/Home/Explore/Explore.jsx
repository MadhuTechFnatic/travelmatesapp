import { View, Text, Image, Button, Pressable } from 'react-native'
import React from 'react'
import ExploreGlobeLogo from '../../../../../assets/Explore/explore_globe.png'

const Explore = ({navigation}) => {
  return (
    <View className = ''>
        <View className = 'shadow-md shadow-gray-300 m-1 rounded-lg p-2'>
            <View className = 'flex flex-row justify-between px-3 items-center'>
            <Image source={ExploreGlobeLogo} className= 'w-[20%] h-[70px]'/>
            <Text className = 'font-thin p-2 pr-0 w-[80%] '>"Discover our collection of visited places across different countries! From stunning beaches to breathtaking mountains, we've got it all. Explore our curated list and get inspired for your next adventure."</Text>
            </View>
            <Pressable onPress={()=> navigation.navigate('ExploreCountries') } className = 'm-2 self-end'>
                <Text className = 'text-white text-center bg-yellow-400 rounded-md border-2 border-yellow-400 w-16 p-1'>Explore</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Explore