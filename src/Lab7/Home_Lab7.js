import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home as HomeIcon, Setting as SettingIcon, Heart, User, Game as GameIcon } from 'iconsax-react-native';
import { StyleSheet, Text } from 'react-native';
import RowComponent from './RowComponent';
import ForYou from './ForYou';
import Direct from './Direct';
import Favourite from './Favourite';
import Profile from './Profile';
import Setting from './Setting';
import Game from './Game';


const Home_Lab7 = () => {
    const BottomTab = createBottomTabNavigator();
    const TopTab = createMaterialTopTabNavigator();
    
      const TopTabNavigator = () => (
        <TopTab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12, fontWeight: 'bold',  marginLeft: 15},
            iconStyle: { marginBottom: -25, marginRight: 80 },
            style: { elevation: 0, shadowOpacity: 0 , backgroundColor: '#FFFF99'},
          }}
          screenOptions={({ route }) => ({
            tabBarLabelPosition: 'beside-icon',
            tabBarIcon: ({ focused, size, color }) => {
              let icon;
      
              if (route.name === 'ForYou') {
                icon = <HomeIcon size={size} color={focused ? 'coral' : '#444444'} />;
              } else if (route.name === 'Direct') {
                icon = <SettingIcon size={size} color={focused ? 'coral' : '#444444'} />;
              } else {
                icon = <GameIcon size={size} color={focused ? 'coral' : '#444444'} />;
              }
      
              return icon;
            },
          })}>
          <TopTab.Screen name="ForYou" component={ForYou} />
          <TopTab.Screen name="Direct" component={Direct} />
          <TopTab.Screen name="Game" component={Game} />
        </TopTab.Navigator>
      );
      

    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                    tabBarIcon: ({ focused, size, color }) => {
                        let icon, label;

                        if (route.name === 'Home') {
                            icon = <HomeIcon size={size} color={focused ? 'coral' : '#676767'} />;
                            label = focused && <Text style={styles.tabLabel}>Home</Text>;
                        } else if (route.name === 'Setting') {
                            icon = <SettingIcon size={size} color={focused ? 'coral' : '#676767'} />;
                            label = focused && <Text style={styles.tabLabel}>Setting</Text>;
                        } else if (route.name === 'Favourite') {
                            icon = <Heart size={size} color={focused ? 'coral' : '#676767'} />;
                            label = focused && <Text style={styles.tabLabel}>Favourite</Text>;
                        } else {
                            icon = <User size={size} color={focused ? 'coral' : '#676767'} />;
                            label = focused && <Text style={styles.tabLabel}>Profile</Text>;
                        }

                        return (
                            <RowComponent
                                localStyles={{
                                    backgroundColor: focused ? '#FFFF99' : '#fff',
                                }}>
                                {icon}
                                {label}
                            </RowComponent>
                        );
                    },
                })}>
                <BottomTab.Screen name="Home" component={TopTabNavigator} />
                <BottomTab.Screen name="Setting" component={Setting} />
                <BottomTab.Screen name="Favourite" component={Favourite} />
                <BottomTab.Screen name="Profile" component={Profile} />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabLabel: {
        paddingHorizontal: 8,
        color: 'coral',
        fontWeight: '500',
        marginTop: 3
    },
});

export default Home_Lab7;
