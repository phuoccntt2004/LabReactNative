import React from 'react';
import Home_Lab3 from './src/Lab3/Home_Lab3';
import Home_Lab4 from './src/Lab4/Home_Lab4';
import Home_Lab5 from './src/Lab5/Home_Lab5';
import Home_Lab6 from './src/Lab6/Bai1_2_3/Home_Lab6';
import Home_Lab7 from './src/Lab7/Home_Lab7';
import Home_Bai1 from './src/Lab8/Bai1/Home_Bai1';
import { NavigationContainer } from '@react-navigation/native';
import AddAccountScreen from './src/Lab8/Bai1/AddAccountScreen';
import { createStackNavigator } from '@react-navigation/stack';


const App: React.FC = () => {

  const Stack = createStackNavigator(); 
  return (
    // <Home_Lab3/>
    // <Home_Lab4/>
    // <Home_Lab5/>
    // <Home_Lab6/>
    // <Home_Lab7/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_Bai1" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home_Bai1" component={Home_Bai1} />
        <Stack.Screen name="AddAccountScreen" component={AddAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;