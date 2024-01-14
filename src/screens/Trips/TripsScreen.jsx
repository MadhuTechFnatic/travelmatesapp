import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import Trips from './Trips';
import HomeScreenStack from './Home/HomeScreen';

const Stack = createStackNavigator();

function TripScreenStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}>
      <Stack.Screen name="MainHome" component={HomeScreenStack} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Trips" component={Trips} />
    </Stack.Navigator>
  );
}

export default TripScreenStack