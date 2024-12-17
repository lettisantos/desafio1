// Inicio 
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Fim da configuração


//Importar as pásginas
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
//Fim da importação das páginas




//Criando o componente de TABS
function Tabs() {

    
}


//Criando o componente que terá todas da aplicação
export default function Router() {
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
                ></Stack.Screen>

                <Stack.Screen
                    name="Details"
                    component={Tabs}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


