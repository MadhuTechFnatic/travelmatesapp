import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Buffer = ({
    show,
    children

}) => {
  return (
    <View>
        {
            show ?
            <View className = 'top-96'>
                <ActivityIndicator size={'large'} color={'skyblue'} />
            </View>    
            :
            children 
        }
    </View>
  )
}

export default Buffer