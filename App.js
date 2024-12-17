import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();





export default function App() {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: "Bem Vindo!",
              headerStyle: {
                backgroundColor: "green"
              }
            }
          }
        >

        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login} >

        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details} >

        </Stack.Screen>
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}

