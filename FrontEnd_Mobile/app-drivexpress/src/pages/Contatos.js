import * as React from "react";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import Carousels from '../components/Carousels';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';


const Contatos = () => {
const navigation = useNavigation();
  return (
    <Container>
    

    <Body>
    
    <ScrollView>
    
    <Cards
      foto={{
        uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a8fa5e70c5e12afe3866ddbd5bb1cdcf",}}
      nome={"Ei, você... Alguma sugestão?"}
      texto={"Possui alguma idéia de melhoria do nosso app? Clique a abaixo e preencha o campo de sugestões."}
      botao={"Caixa de sugestão"}
      rota={() => navigation.navigate("Sugestao")}
        />

    <Cards
    foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a362803285cd82b2e2baa34ba37cbd76",
          }}
          nome={"SAC DriveXpress"}
          texto={
            "Encontrou algum erro no aplicativo? Clique no botão abaixo e entre em contato com nosso serviço de suporte ao usuário."
          }
          botao={"Iniciar chat"}
          rota={() => navigation.navigate("#")}
        />        
        
    </ScrollView>
    </Body>
    
    </Container>

  );
};


export default Contatos;