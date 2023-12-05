import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { Button, BottomNavigation } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import Input from '../components/Input';
import Container from '../components/Container';
import Body from '../components/Body';

const Conta = () => {
const navigation = useNavigation();
  return (
    <Container>
      

      <Body>

        <Input 
          label="Nome" 
        />

        <Input 
          label="Email"
          keyboardType='email-adress'
        />

        <Input 
          label="CPF"
          keyboardType='numeric' 
        />

        <Input 
          label="Senha "
        />

        <Input 
          label='Confirmar Senha'
        />

        <Button
          style={styles.button} 
          icon="content-save-outline" 
          mode="contained" 
          onPress={() => console.log('Salvo')}>
          Salvar
        </Button>

        <Button
          style={styles.button}
          icon="delete" 
          mode="contained" 
          onPress={() => console.log('Excluído')}>
          Excluir
        </Button>

      </Body>

    </Container>

  );
};

const styles = StyleSheet.create ({
  button: {
    marginBottom: 8,
    bacgroundColor: "red"
  },
});

export default Conta;