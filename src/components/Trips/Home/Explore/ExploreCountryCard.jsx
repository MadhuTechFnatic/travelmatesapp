import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const ExploreCountryCard = ({navigation, item}) => {

    function toTitleCase(str) {
        const words = str.split(' ');
        const titleCaseWords = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        const titleCaseString = titleCaseWords.join(' ');
        return titleCaseString;
      }
      
  return (
    <Pressable className = '' onPress={()=> navigation.navigate('ExploreTrips', {category : item.category, title : toTitleCase(item.category)})}>
        <View  className = 'mx-4 mb-5'>
            <View className = 'shadow-md p-2 border-2 rounded-xl border-gray-300'>
                <Image source={{uri : item?.cover}} className = 'w-[100%] h-[130px] rounded-xl'/>
                <Text className= 'text-sky-400 text-lg text-center' >{toTitleCase(item?.category)}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default ExploreCountryCard