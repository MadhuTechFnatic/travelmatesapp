import { View, Text, Image } from 'react-native'
import React from 'react'
import HomeHeader from '../../../components/Trips/Home/HomeHeader'
import Explore from '../../../components/Trips/Home/Explore/Explore'

export default function Home({navigation}) {
  return (
    <View>
      <HomeHeader navigation = {navigation}/>
      <Explore navigation = {navigation}/>
    </View>
  )
}