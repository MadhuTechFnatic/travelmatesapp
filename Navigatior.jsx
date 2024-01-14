import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TripScreenStack from './src/screens/Trips/TripsScreen';
import Create from './src/screens/Create/Create';
import Chats from './src/screens/Chats/Chats';
import Profile from './src/screens/Profile/Profile';
import Interactions from './src/screens/Interactions/Interactions';

const Tab = createBottomTabNavigator();

const defaultOptions = {
  headerShown: false,
};

const Navigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...defaultOptions,
      }}
    >
      <Tab.Screen
        name="MainTrips"
        component={TripScreenStack}
        options={{
          ...defaultOptions,
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          ...defaultOptions,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          ...defaultOptions,
        }}
      />
      <Tab.Screen
        name="Interactions"
        component={Interactions}
        options={{
          ...defaultOptions,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          ...defaultOptions,
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
