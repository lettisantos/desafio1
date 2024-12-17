    import React from "react";  
    import {Text, StyleSheet} from "react-native";


    /* 1 forma
        class Titulo extends React.Component{
        render(){
            return(
                <Text style={css.titulo}>XPTO</Text>
            )
        }

    }
    */

    /* 2 forma em componente em formato de arrow funtion
    const Titulo =()=>(
        <Text style={css.titulo}>XPTO</Text>
    )
    */
    
    function Titulo(props){
        return (
            <Text style={css.titulo}>{props.titulo}</Text>
        )

    }


    const css=StyleSheet.create({
       titulo:{
           color: 'rgb(33, 150, 243)',
           fontSize: 40,
           fontWeight:'bold'
       }
        

    });
    export default Titulo