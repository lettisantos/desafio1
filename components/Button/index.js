import React from "react";
import {Button,Alert} from "react-native";


/*esse botão não aceita Style ou CSS */
const MeuButton =(props)=>{
    return(
        <Button
        color="red"
        title={props.titulo}
        onPress={()=> Alert.alert('Deu certo a mensagem de Alerta')}
        />
    )

}

export default MeuButton