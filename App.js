import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

import ListScreen from './screens/ListScreen';
import LikedScreen from './screens/LikedScreen';
import AddScreen from './screens/AddScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';
import MapScreen from './screens/MapScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ListStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} 
        options={{
          headerShown: true,
          title: '',
        }}
      />
      <Stack.Screen name="Map" component={MapScreen} options={{
          headerShown: true,
          title: 'Next to you',
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false, // Hide tab labels
        }}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="List"
          component={ListStack}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./logos/iconMenuList.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Liked"
          component={LikedScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./logos/iconMenuHeart.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./logos/iconAdd.png')}
                style={{ width: 72, height: 92 }}
              />
            ), 
            //headerShown: false, //hides the Tab screen name
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./logos/iconMenuChat.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./logos/iconMenuUser.png')}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
