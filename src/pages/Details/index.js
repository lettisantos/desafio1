import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

export default function Details() {  
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  const handlerCadastrar = () => {
    
    Alert.alert(
      'Cadastro Realizado!',
      `Nome Completo: ${nomeCompleto}\nRua: ${rua}\nNúmero: ${numero}\nBairro: ${bairro}\nCidade: ${cidade}\nEstado: ${estado}\nCEP: ${cep}`
    );
  };

  return (
    <View style={styles.container}>
      <Titulo titulo="Cadastro de Usuário" />

      <MeuInput
        label="Nome Completo"
        placeholder="Seu nome completo"
        value={nomeCompleto}
        onChangeText={(text) => setNomeCompleto(text)}
      />

      <MeuInput
        label="Rua"
        placeholder="Sua rua"
        value={rua}
        onChangeText={(text) => setRua(text)}
      />

      <MeuInput
        label="Número"
        placeholder="Número da residência"
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />

      <MeuInput
        label="Bairro"
        placeholder="Seu bairro"
        value={bairro}
        onChangeText={(text) => setBairro(text)}
      />

      <MeuInput
        label="Cidade"
        placeholder="Sua cidade"
        value={cidade}
        onChangeText={(text) => setCidade(text)}
      />

      <MeuInput
        label="Estado"
        placeholder="Seu estado"
        value={estado}
        onChangeText={(text) => setEstado(text)}
      />

      <MeuInput
        label="CEP"
        placeholder="Seu CEP"
        value={cep}
        onChangeText={(text) => setCep(text)}
      />

      <SuperButton valor="Cadastrar" callback={handlerCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
