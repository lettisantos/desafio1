// Arquivo que terá todas as rotas que precisam de autenticação
// Arquivo que terá todas as rotas que não precisam de autenticação
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AppStack=createNativeStackNavigator();

import Home from "../pages/Home";
//Rota para um lugar
//Rota para outro lugar
//Rota para muitos lugares

export default function AppRoutes(){
    return(
        <AppStack.Navigator initialRouteName="Home"> 
            <AppStack.Screen name="Home" component={Home} options={{}}></AppStack.Screen>
        </AppStack.Navigator>


    )

}