import * as React from "react";
import { StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import Cards from "../components/Cards";
import Input from "../components/Input";
import Container from '../components/Container';
import Body from '../components/Body';



const Sugestao = () => {
  const navigation = useNavigation();
  return (
    <Container>
    

    <Body>
    <Cards 
    foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a8fa5e70c5e12afe3866ddbd5bb1cdcf",
          }}
          nome={"Digite sua sugestão no campo abaixo"}
          texto={
            `Escreva sua sugestão no campo inferior da página e nos encaminhe clicando no botão "Enviar".`
          }          
          botao={"Enviar"}
          rota={""}
        />
        <Input/>

    
    </Body>

    </Container>
  );
};

export default Sugestao;