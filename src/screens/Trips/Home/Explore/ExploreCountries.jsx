import { View, Text, FlatList, ScrollView, Lis } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '../../../../components/Trips/Home/HomeHeader'
import instance from '../../../../../axios/instance'
import ExploreCountryCard from '../../../../components/Trips/Home/Explore/ExploreCountryCard'
import CountriesSkeleton from '../../../../Skeletons/Explore/CountriesSkeleton'


const ExploreCountries = ({navigation}) => {
  
  const [countries, setCountries] = useState(Array.from({ length: 15 }, (_, index) => index + 1))
  const [isLoading, setIsloading] = useState(false)
  const secs = 10
  const dynamic = false

  const getCountries = () => {
    setIsloading(true)
    let endPoint = 'explore/categories'
    instance.get(endPoint)
    .then(response => {
      let data = response.data
      setCountries(data)
      setIsloading(false)
    })
    .catch(error => {
      console.log('Internal error!')
      setIsloading(false)
    })
  }

  useEffect(() => {
    getCountries()
    if (dynamic){
      const getContriesInterval = setInterval(() => {
        getCountries();
      }, 1000 * secs);
        return () => clearInterval(getContriesInterval);
    }
  }, []);
  
  return (
    <View>
        <FlatList
          ListHeaderComponent={()=> <>
            <HomeHeader navigation = {navigation}/>
            <Text className = 'text-sky-400 text-lg my-2 text-center'>Our Collection Places </Text>
          </>}
          data={countries}
          renderItem={({item, index}) => 
            <View className = {`w-[54%]  ${index%2 === 0 ? 'self-start' : 'self-end' }`}>
               {
                 !isLoading && typeof item === 'object' ?
                   <ExploreCountryCard navigation = {navigation} item = {item}/>
                 : 
                   <CountriesSkeleton/>
               }
            </View>
             }
          />
    </View>
)
}

export default ExploreCountries