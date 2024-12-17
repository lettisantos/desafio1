// Arquivo que terá todas as rotas que não precisam de autenticação
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AuthStack=createNativeStackNavigator();

import Login from "../pages/Login";

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator initialRouteName="Login"> 
            <AuthStack.Screen name="Login" component={Login} options={{}}></AuthStack.Screen>
        </AuthStack.Navigator>


    )

}
