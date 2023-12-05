import * as React from 'react';
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';


const SushiBar = () => {
  const navigation = useNavigation();
  return (
    <Container>
 

    <Body>
     <ScrollView>
       <Cards
       foto={{
             uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/%7Easset/1044defc1c89d1466f0fb76c1f9dbfdc",
           }}
             nome={"Poke Tropical"}
              texto={
             "No Poke Tropical, vem arroz, manga, limão, repolho, Salmão e Pepino. R$45,89"
            }
            botao={"Peça Aqui"}
            rota={() => navigation.navigate("#")}
          />
       <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/%7Easset/5ece3ae7e1740a8ac25cff47198373a3",
          }}
          nome={"Poke de Salmão"}
          texto={
            "No Poke de Salmão, vem Salmão e Pepino. R$55,90"
          }
          botao={"Peça Aqui"}
          rota={() => navigation.navigate("#")}
        />        
         <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/37b20f9ed8f6511069f7e3b0fe173a74",
          }}
          nome={"Sushi de pepino"}
          texto={
            "Sushi de pepino R$."
          }
          botao={"Peça Aqui"}
          rota={() => navigation.navigate("#")}
        />        
       </ScrollView>
      </Body>
   </Container>

  )
}

export default SushiBar;