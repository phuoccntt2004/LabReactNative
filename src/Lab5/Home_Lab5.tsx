import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import IMAGES from '../assets/Images';
import Bai1_Fonts from './Bai1_Fonts';
import Bai2_FlexBox from './Bai2_FlexBox';
import Bai3_FlexBox from './Bai3_FlexBox';

const Tab = createBottomTabNavigator();
const Home_Lab5 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Bai1_Fonts' screenOptions={{headerShown: false}}>
                <Tab.Screen name='Bai1_Fonts' component={Bai1_Fonts}
                    options={{
                        title: "Bai1",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>
                <Tab.Screen name='Bai2_FlexBox' component={Bai2_FlexBox}
                    options={{
                        title: "Bai2",
                        tabBarIcon: ({ focused }) => (
                          <Image source={IMAGES.HomePage} style={{ tintColor: focused ? 'orange' : 'gray' }} />
                        ),
                        tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray',
                      }}/>  
                <Tab.Screen name='Bai3_FlexBox' component={Bai3_FlexBox}
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

export default Home_Lab5;