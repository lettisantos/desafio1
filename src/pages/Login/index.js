import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native';
import Titulo from '../../components/Titulo';
import MeuInput from '../../components/Input';
import SuperButton from '../../components/SuperButton';

export default function Login({navigation,route}) {
  const [email, setEmail] = useState(''); // Estado para armazenar o email digitado
  const [senha, setSenha] = useState(''); // Estado para armazenar a senha digitada

  const handlerLogin = () => {
    //console.log(`Email: ${email}, Senha: ${senha}`); // Log para depuração

    // Exibe os valores das variáveis email e senha para teste
    //Alert.alert('Valores Digitados', `Email: ${email}\nSenha: ${senha}`);

    // Validação do login
    if (email === 'admin@admin.com' && senha === '123456') {
      Alert.alert('Login bem-sucedido!', 'Indo para a página Detalhes...');
      navigation.navigate('Details');
    } else {
      Alert.alert('Erro', 'Email ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Titulo titulo="Login" />

      <MeuInput
        label="E-mail"
        placeholder="admin@admin.com"
        value={email} // Vincula o valor do input ao estado
        onChangeText={(text) => {
          //console.log(`Email atualizado: ${text}`); // Log para ver o valor alterado
          setEmail(text); // Atualiza o estado do email
        }} // Atualiza o estado do email
      />

      <MeuInput
        label="Senha"
        placeholder="********"
        secureTextEntry={true}
        value={senha} // Vincula o valor do input ao estado
        onChangeText={(text) => {
          //console.log(`Senha atualizada: ${text}`); // Log para ver o valor alterado
          setSenha(text); // Atualiza o estado da senha
        }} // Atualiza o estado da senha
      />

      <SuperButton valor="Enviar" callback={handlerLogin} />

      <SuperButton 
        valor="Alterar Senha" 
        callback={() => Alert.alert('Esse botão irá posteriormente para tela de alterar senha!')} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
