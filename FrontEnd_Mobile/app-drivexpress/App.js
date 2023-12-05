import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MenuBotton from "./src/navigatons/MenuBotton"
import Main from "./src/navigatons/Main"
import Login from "./src/pages/Login"

const App = () => {
  return (
    <NavigationContainer>
       <Main/>
    </NavigationContainer>

   
  );
};


export default App;