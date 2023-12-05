import * as React from 'react';
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../components/Header';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Body from '../components/Body';

const Restaurantes = () => {
  const navigation = useNavigation();
  return (
    <Container>
    <Header title={'Restaurantes'}>

    <Body>
     <ScrollView>
       <Cards
       foto={{
             uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5e6f706fd53693f2b45c5901ad6afa08",
           }}
             nome={"Pizzaria Bella Napoli"}
              texto={
             "Desfrute da autêntica experiência italiana na Pizzaria Bella Napoli. Nossas pizzas são feitas com ingredientes frescos e selecionados, e assadas em forno a lenha para garantir uma crosta crocante e sabor inigualável. Com uma variedade de sabores, desde clássicos margheritas até criações exclusivas, cada pedaço é uma viagem à Itália. Entregamos qualidade e sabor diretamente na sua porta."
            }
            botao={"acesse Aqui"}
            rota={() => navigation.navigate("#")}
          />
       <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/dea5fda69a3600538199757b422aa65a",
          }}
          nome={"Pizzaria Expresso Ráipdo"}
          texto={
            "Se você está com fome e quer satisfazer seu desejo por pizza rapidamente, a Pizza Expresso Rápido é a escolha perfeita. Nosso cardápio diversificado oferece opções para todos os gostos, e nossas pizzas são preparadas e entregues em tempo recorde. Experimente o equilíbrio perfeito entre rapidez e qualidade - pizza quente e deliciosa em minutos."
          }
          botao={"acesse aqui"}
          rota={() => navigation.navigate("#")}
        />        
         <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c2ea5ee9532516ed4815f41e631e5463",
          }}
          nome={"Pizzaria Vegana Sabor Verde"}
          texto={
            "Para os amantes de uma alimentação consciente, a Pizzaria Vegana Sabor Verde é o seu paraíso. Nossa missão é oferecer pizzas deliciosas e totalmente veganas, sem comprometer o sabor. Utilizamos ingredientes frescos, desde nossas massas integrais até as opções de queijo vegano. Descubra uma nova maneira de apreciar a pizza com nossas combinações únicas de sabores, tudo sem ingredientes de origem animal."
          }
          botao={"acesse aqui"}
          rota={() => navigation.navigate("#")}
        />     
        <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/7cf2d5b903416a898e1b9079c84c68e5",
          }}
          nome={"Pizza do Chef Arrojado"}
          texto={
            "Na Pizza do Chef Arrojado, cada pizza é uma obra-prima culinária. Nossos chefs dedicados criam combinações de sabores ousadas e inovadoras que certamente surpreenderão seu paladar. Da clássica Pepperoni à extravagante Pizza Trufada, cada pedaço é uma explosão de criatividade e delícia. Se você está em busca de uma experiência única em pizza, permita-nos levar você em uma jornada gastronômica."
          }
          botao={"acesse aqui"}
          rota={() => navigation.navigate("#")}
        />           
       </ScrollView>
      </Body>
  </Header>
   </Container>

  )
}

export default Restaurantes;