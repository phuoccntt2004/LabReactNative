import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailsScreen';
import DrawerContent from './DrawerContent';
import Article from './Article';
import Chat from './Chat';
import Setting from './Setting';

export type RootStackParamList = {
  Home: undefined;
  Details: { name: string; id: number };
  Article: undefined; 
  Chat: undefined;    
  Setting: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return <DrawerContent {...props} />;
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="MainStack" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
