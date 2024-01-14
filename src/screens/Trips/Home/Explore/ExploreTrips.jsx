import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import ExploreDetailCard from '../../../../components/Trips/Home/Explore/ExploreDetailCard'
import HomeHeader from '../../../../components/Trips/Home/HomeHeader'
import instance from '../../../../../axios/instance'
import Buffer from '../../../../components/other/Buffer'

const ExploreTrips = ({ navigation, route }) => {

  const [isLoading, setIsloading] = useState(false)
  const { category, title } = route.params
  const [trips, setTrips] = useState([])

  const getTrips = () => {
    setIsloading(true)
    let endPoint = `explore/sample_trips/${category}`
    instance.get(endPoint)
      .then(response => {
        let data = response.data
        setTrips(data)
        setIsloading(false)
      })
      .catch(error => {
        console.log('Internal error!')
        setIsloading(false)
      })
  }

  useEffect(() => {
    getTrips()
  }, [])

  return (
    <View>
        <Buffer show={isLoading}>
          <FlatList
            className='mt-3'
            ListHeaderComponent={()=> 
              <>
                <HomeHeader navigation={navigation} />
                <Text className='text-white text-center bg-sky-400'>{trips.length} Best Places to Visit in <Text className='text-yellow-400'>{title}</Text></Text>
              </>
            }
            data={trips}
            renderItem={({ item, index }) => <ExploreDetailCard navigation={navigation} index = {index} item={item} />}
          />
        </Buffer>
    </View>
  )
}

export default ExploreTrips;
