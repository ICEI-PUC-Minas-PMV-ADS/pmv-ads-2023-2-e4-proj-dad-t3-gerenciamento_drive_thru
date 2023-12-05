import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Header from '../components/Header';
import Cards from '../components/Cards';

const Restaurantes = () => {
    const navigation = useNavigation();
  return (
    <>
    <Header title = "Restaurantes">
     <ScrollView>
       <Cards
       foto={{
             uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/0bf08aa8e1925fd068b3a9a7775fd91b",
           }}
             nome={"Prato Quente"}
              texto={
             "Se você é fã de carne suculenta e churrasco, este restaurante argentino é o lugar certo. Com uma seleção de cortes premium, a carne é grelhada à perfeição e servida com acompanhamentos deliciosos. "
            }
            botao={"acesse Aqui"}
            rota={() => navigation.navigate("PratoQuente")}
          />
       <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/23405bb884cedf1678a9f94b0124d6b6",
          }}
          nome={"Cheff Restaurant"}
          texto={
            "Experimente a massa fresca feita à mão e os molhos ricos que transportam seus sentidos diretamente para as regiões ensolaradas da Itália."
          }
          botao={"acesse aqui"}
          rota={() => navigation.navigate("CheffRes")}
        />        
         <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e47d70fc06bb42792cb7d13d0aec003d",
          }}
          nome={"Sushi Bar"}
          texto={
            "Com uma fusão de sabores asiáticos, este restaurante é um paraíso para os amantes de sushi e pratos orientais. Os chefs habilidosos preparam pratos delicadamente equilibrados, desde sushis tradicionais até criações únicas da casa."
          }
          botao={"acesse aqui"}
          rota={() => navigation.navigate("SushiBar")}
        />     
        <Cards
          foto={{
            uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2fc2b94d167fa0df6b6ba5e674548224",
          }}
          nome={"Artisan"}
          texto={
            "Este restaurante encanta até mesmo os carnívoros mais convictos com sua abordagem inovadora à culinária vegetariana e vegana. Os pratos são preparados com ingredientes frescos e sazonais, combinando sabores de maneiras surpreendentes."
          }
          botao={"acesse aqui"}
          rota={() => navigation.navigate("Artisan")}
        />           
       </ScrollView>
      </Header>
   </>

  )
}

export default Restaurantes;