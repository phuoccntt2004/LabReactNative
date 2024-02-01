import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Bai1_2_Lab3 from './Bai1_2_Lab3';
import Bai3_Lab3 from './Bai3_Lab3';
import IMAGES from '../assets/Images';

const Tab = createBottomTabNavigator();

const Home_Lab3 = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Bai1_2_Lab3'>
        <Tab.Screen name='Bai1_2_Lab3' component={Bai1_2_Lab3} 
          options={{
            title: "Bai1_2",
            tabBarIcon: ({ focused }) => (
              <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
            ),
            tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen name='Bai3_Lab3' component={Bai3_Lab3}
          options={{
            title: "Bai3",
            tabBarIcon: ({ focused }) => (
              <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
            ),
            tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Home_Lab3;
