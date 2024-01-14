import React from 'react';
import { View, Text, Image } from 'react-native';
import HeaderLogo from '../../../../assets/Header/header_logo.png';
import { Feather } from '@expo/vector-icons';

const HomeHeader = ({navigation}) => {
  return <View className = 'rounded-lg bg-gray-100 flex flex-row justify-between px-3 items-center 0shadow-lg 0shadow-black h-10'>
            <View className = 'p-1 px-3 flex flex-row items-center'>
                <Image source={HeaderLogo} className= 'w-[20] h-[20]'/>
                    <Text className = 'text-xl text-sky-400 px-2'>TravelMates
                        <Text className = 'text-lg text-yellow-400'>.com </Text>
                    </Text>
                </View>
            <Feather name="search" onPress={()=> navigation.navigate('Search')} size={24} color="skyblue"/>
        </View>;
}

export default HomeHeader;