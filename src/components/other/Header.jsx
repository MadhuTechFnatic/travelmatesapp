import { View, Text, Image } from 'react-native';
import HeaderLogo from '../../../assets/Header/header_logo.png';

const Header = ({route}) => {
    return (
      <View className = 'rounded-lg bg-gray-100 shadow-lg'>
        <View className = 'p-1 px-3 flex flex-row 1justify-center items-center'>
            <Image source={HeaderLogo} className= 'w-[20] h-[20]'/>
            <Text className = 'text-xl text-sky-400 px-2'>TravelMates
                <Text className = 'text-lg text-yellow-400'>.com </Text>
            </Text>
        </View>
      </View>
    );
  };

  export default Header;