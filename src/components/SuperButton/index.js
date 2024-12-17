import React from "react";
import { TouchableHighlight,StyleSheet,View,Text, Alert } from "react-native";

const SuperButton=(props)=>{
    return (
        <TouchableHighlight
        style={style.superButton}
        onPress={props.callback}
        //onPress={()=> Alert.alert('OBAAAA !!! FUNCIONOU!!!!')}    

        >
            <View style={style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>



        </TouchableHighlight>
    )
}

const style =  StyleSheet.create({
    superButton:{

    },
    button:{
        alignItems: 'center',
        backgroundColor: 'rgb(126, 87, 194)',
        padding:12,
        width:300,
        textAlign:'left',
        marginTop:10
    },
    valor:{
       fontSize:18,
       color:'#fff',
       fontWeight:'bold'
    }
})

export default SuperButton