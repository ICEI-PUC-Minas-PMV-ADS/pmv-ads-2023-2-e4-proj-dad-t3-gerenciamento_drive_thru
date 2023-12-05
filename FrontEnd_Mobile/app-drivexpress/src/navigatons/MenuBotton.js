import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "../pages/Home"
import Pesquisar from "../pages/Searchpage"
import Restaurantes from "../pages/Restaurantes"
import Carrinho from "../pages/Carrinho";



const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: 'red' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hamburger" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          tabBarLabel: 'Restaurantes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="storefront-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="pesquisar"
        component={Pesquisar}
        options={{
          tabBarLabel: 'pesquisar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-variant" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return  <MyTabs />
    
}
