import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./MenuBotton"
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Pesquisar from "../pages/Searchpage"
import Termos from "../pages/Termos"
import Sushi from "../pages/SushiBar"
import Sugestao from "../pages/Sugestao"
import Contatos from "../pages/Contatos"
import Artisan from "../pages/Artisan"
import CheffRes from "../pages/CheffRestaurant"
import Prato from "../pages/PratoQuente"

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" 
      component={Home}
      options={{ header: () => null }}/>
      
      <Stack.Screen name="Cadastro" 
      component={Cadastro} 
      />
      
      <Stack.Screen name="Login" 
      component={Login} 
      />
      
      <Stack.Screen name="Pesquisar" 
      component={Pesquisar} 
      options={{ header: () => null }}/>

      <Stack.Screen name="Sugestao" 
      component={Sugestao} 
      />
     
     <Stack.Screen name="SushiBar" 
      component={Sushi} 
      />
      <Stack.Screen name="Artisan" 
      component={Artisan} 
      />
      <Stack.Screen name="CheffRes" 
      component={CheffRes} 
      />
      <Stack.Screen name="PratoQuente" 
      component={Prato} 
      />
      <Stack.Screen name="Contatos" 
      component={Contatos} 
      />
     
     <Stack.Screen name="Termos" 
      component={Termos} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
   
      <MyStack />
   
  );
}
