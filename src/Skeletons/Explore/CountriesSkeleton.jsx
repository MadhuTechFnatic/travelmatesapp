import React from 'react';
import { View, Text } from 'react-native';
import FadeInAnimation from '../../../Animations/Animations';


const CountriesSkeleton = () => {
  return (
        <View>
            <FadeInAnimation>
            <View className = 'mx-4 mb-5'>
                <View className = 'shadow-md p-2 border-2 rounded-xl border-gray-300'>
                    <View className = 'w-[100%] bg-zinc-300 h-[130px] rounded-xl'/>
                    <View className = 'rounded-lg bg-zinc-300 m-1'> 
                        <Text className= 'text-sky-400 text-center'></Text>
                    </View>
                </View>
            </View>                
            </FadeInAnimation>
        </View>
    );
};

export default CountriesSkeleton;
