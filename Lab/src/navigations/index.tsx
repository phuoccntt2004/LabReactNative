import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import Bai1_2_Lab3 from '../Lab3/Bai1_2_Lab3';
import Bai3_Lab3 from '../Lab3/Bai3_Lab3';
import IMAGES from '../../assets/Images';
import Lab4 from '../Lab4/Lab4';
import { createStackNavigator } from '@react-navigation/stack';
import Lab4Bai3 from '../Lab4/Lab4Bai3';
import Home_Lab5 from '../Lab5/Home_Lab5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='TabHome'>
      <Stack.Screen name='TabHome' component={TabBottomNav}/>
      <Stack.Screen name='Lab4Bai1_2' component={Lab4}/>
      <Stack.Screen name='Lab4Bai3' component={Lab4Bai3}/>
      <Stack.Screen name='Lab5' component={Home_Lab5}/>

    </Stack.Navigator>
  );
}
const TabBottomNav=()=>{
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Bai1_2_Lab3'>
      <Tab.Screen name='Bai1_2_Lab3' component={Bai1_2_Lab3} 
        options={{
          title: "Bai1_2 Lab 3",
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.Home} style={{ tintColor: focused ? 'orange' : 'gray' }} />
          ),
          tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen name='Bai3_Lab3' component={Bai3_Lab3}
        options={{
          title: "Bai3 Lab 3",
          tabBarIcon: ({ focused }) => (
            <Image source={IMAGES.Home} style={{ tintColor: focused ? 'orange' : 'gray' }} />
          ),
          tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  )
}

export default StackNavigator;
