import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

// Import your screens for each tab
import ListScreen from './screens/ListScreen';
import LikedScreen from './screens/LikedScreen';
import AddScreen from './screens/AddScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false, // Hide tab labels
        }}
      >
        <Tab.Screen
          name="Category"
          component={ListScreen}
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
