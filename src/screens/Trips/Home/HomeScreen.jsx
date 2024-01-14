import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ExploreCountries from './Explore/ExploreCountries';
import ExploreTrips from './Explore/ExploreTrips';

const Stack = createStackNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown : false
    }}>  
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ExploreCountries" component={ExploreCountries} />
      <Stack.Screen name="ExploreTrips" component={ExploreTrips} />
    </Stack.Navigator>
  );
}

export default HomeScreenStack