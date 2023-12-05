import * as React from 'react';
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';


const Artisan = () => {
  const navigation = useNavigation();
  return (
    <Container>
   

    <Body>
     <ScrollView>
       <Cards
       foto={{
             uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c71dcdccf4ef9910c31e38f92a3548c1",
           }}
             nome={"Vegano Peixe"}
              texto={
             `No Vegano peixe, sua experiencia é vegana. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. R$45,89`
            }
            botao={"Peça aqui"}
            rota={() => navigation.navigate("#")}
          />
       <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ebe13907661dc2fca087b4b03fa8b99a",
          }}
          nome={"Camarão Xuxian"}
          texto={
            `Camarao vegano.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. R$55,90`
          }
          botao={"Peça aqui"}
          rota={() => navigation.navigate("#")}
        />        
         <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ad6164fca0e92c502a9fa6e477ddbf17",
          }}
          nome={"Salmãozinho"}
          texto={
            `Peixe salmão com temperos. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. R$69,90.`
          }
          botao={"Peça aqui"}
          rota={() => navigation.navigate("#")}
        />        
       </ScrollView>
       </Body>
   </Container>

  )
}

export default Artisan;
