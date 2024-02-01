import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Cart_User from './flatlist/Cart_User';
import { Image } from 'react-native';
import IMAGES from '../assets/Images';
import StatusBar_Lab4 from './statusbar/StatusBar';
import LoginScreen from './auth/LoginScreen';

const Tab = createBottomTabNavigator();
const Home_Lab4 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Cart_User' screenOptions={{headerShown: false}}>
                <Tab.Screen name='Cart_User' component={Cart_User}
                    options={{
                        title: "Bai1",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>
                <Tab.Screen name='StatusBar' component={StatusBar_Lab4}
                    options={{
                        title: "Bai2",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>  
                <Tab.Screen name='LoginScreen' component={LoginScreen}
                    options={{
                        title: "Bai3",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>                
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home_Lab4;