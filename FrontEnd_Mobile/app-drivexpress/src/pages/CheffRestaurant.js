import * as React from 'react';
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';


const CheffRestaurant = () => {
  const navigation = useNavigation();
  return (
    <Container>
      

      <Body>
        <ScrollView>
          <Cards
          foto={{
                uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/%7Easset/26a0bcdda4f6b33f9827e33c35c3c452",
              }}
                nome={"Macarrão Tropical"}
                  texto={
                "Espaguete Simples e com folha de Hortelã. R$45,89"
                }
                botao={"Peça aqui"}
                rota={() => navigation.navigate("#")}
              />
          <Cards
              foto={{
                uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/156f4c21d7626f2ba9db3b37a4b124ab",
              }}
              nome={"Espaguete Xuxian"}
              texto={
                "Espaguente Manjericão e folhas verdes. R$55,90"
              }
              botao={"Peça aqui"}
              rota={() => navigation.navigate("#")}
            />        
            <Cards
              foto={{
                uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/baa142f7cb85d558685baeb9275702f3",
              }}
              nome={"Espaguete Com Queijo e Bacon"}
              texto={
                "Espaguete com Quqijo e Bacon R$69,90."
              }
              botao={"Peça aqui"}
              rota={() => navigation.navigate("#")}
            />        
        </ScrollView>
      </Body>
    </Container>

  )
}

export default CheffRestaurant; 