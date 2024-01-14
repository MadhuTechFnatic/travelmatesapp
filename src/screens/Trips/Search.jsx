import React, { useEffect, useState } from 'react';
import { View, TextInput, Image } from 'react-native';
import HeaderLogo from '../../../assets/Header/header_logo.png';
import { Feather } from '@expo/vector-icons';

const Search = ({navigation}) => {

  const [searchText, setSearchText] = useState('')

  useEffect(()=>{

  },[])


  return <View className = 'rounded-lg bg-gray-100 flex flex-row px-3 items-center h-12'>
            <Image source={HeaderLogo} className= 'w-[8%] h-[30]'/>
            <TextInput 
              id='searchBox'
              placeholder = 'Search Trips..'
              className='border-2 px-2 rounded-lg w-[81%] h-9 mx-2 border-sky-400'
              value={searchText}
              onChangeText={(value)=> setSearchText(value)}
            />
            <Feather name="search" onPress={()=> navigation.navigate('Trips', {searchText} )} size={25} color="skyblue"/>
        </View>;
}

export default Search;