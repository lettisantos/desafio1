import React from "react";
import {  Alert, StyleSheet, Text, View, Button } from 'react-native';
import Titulo from '../../components/Titulo';

export default function Home({navigation,route}){
    return(
        <View style={styles.container}> 
            <Titulo titulo="Seja BEM VINDO!"/>


            <Button
             title="Ir para tela de Login"  
             onPress={()=>navigation.navigate('Login',{nome:"Rogerio", idade:16})} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});