import React from "react";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";

function MeuInput(props) {
  return (
    <SafeAreaView>
      <Text>{props.label}</Text>
      <TextInput
        style={style.input}
        placeholder={props.placeholder}
        value={props.value} // Vincula o valor do estado ao input
        onChangeText={(text) => {
          console.log(`${props.label} alterado para: ${text}`); // Log para verificar a alteração
          props.onChangeText(text); // Atualiza o estado
        }}
        secureTextEntry={props.secureTextEntry} // Caso seja senha
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 42,
    marginTop: 3,
    marginBottom: 10,
    padding: 10,
    width: 300,
  }
});

export default MeuInput;

