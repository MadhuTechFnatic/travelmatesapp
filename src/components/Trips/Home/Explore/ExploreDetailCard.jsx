import React from 'react';
import { View, Text, Image } from 'react-native';
import HTML from 'react-native-render-html';
import Hr from '../../../../components/other/Hr'

const ExploreDetailCard = ({item, index}) => {

    function removeBrackates (content){
        return content.replace('[', '').replace(']', '').replace(',', '')
    }


  return <View>
            <View className = 'm-6 mx-2 mt-2 mb-2'>
                <View className = 'p-2'>
                    <Image source={{uri : item.image_url}} className = 'w-[100%] h-[200px] rounded-md my-2' />
                    <Text className= 'text-sky-400 text-lg text-center' >{index+1}. {item.title}</Text>
                    <HTML source={{ html: removeBrackates(item.content) }} contentWidth={300} />
                </View>
            </View>
            <Hr/>
        </View>;
}


export default ExploreDetailCard;