import * as React from 'react';
import { ScrollView, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';


const Carrinho = () => {
  const navigation = useNavigation();
  return (
    <Container>
    <Header title={'Carrinho'}>

    <Body>
     <ScrollView>
       <Cards
       foto={{
             uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2203a2fbb6f9ad73f79acd4f70946a0d",
           }}
             nome={"Carne Chapeco"}
              texto={
             "Na carne Chapeco, sua melhor experiência. R$45,89"
            }
            botao={"Excluir"}
            rota={() => navigation.navigate("#")}
          />
       <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3ab80eaa6bfb84ea68f58dffc18a3646",
          }}
          nome={"Carne Tomato"}
          texto={
            "Carne Tomato com Manjerição e Tomate, molho especial. R$55,90"
          }
          botao={"Excluir"}
          rota={() => navigation.navigate("#")}
        />        
         <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/255364f8acdd0491d7595c9ccae60084",
          }}
          nome={"Carne Desfiada ao molho madeira"}
          texto={
            "Carne Desfiada ao molho madeira com uma pitada de cheiro verde. R$.69,80"
          }
          botao={"Excluir"}
          rota={() => navigation.navigate("#")}
        />
        
        <Button
          style={styles.button} 
          icon="basket-check" 
          mode="contained" 
          onPress={() => console.log('Salvo')}>
          Fechar pedido
        </Button>     
       </ScrollView>
       </Body>
    </Header>
   </Container>

  );
};

const styles = StyleSheet.create ({
  button: {
    marginBottom: 8,
    backgroundColor: 'red'
  },
});

export default Carrinho;