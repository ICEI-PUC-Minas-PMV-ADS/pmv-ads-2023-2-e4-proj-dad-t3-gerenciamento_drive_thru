import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {Card, Text, Button} from 'react-native-paper';


const Cards = ({foto, nome, texto, botao, rota}) => (

  <ScrollView> 
  <Card>
    <Card.Cover style={styles.img} source={foto} />

    <Card.Content>
      <Text style={styles.titulo} variant="titleLarge"> {nome}  </Text>
      <Text style={styles.corpo} variant="bodyMedium">  {texto}  </Text>
    </Card.Content>

    <Button style={styles.button} mode="contained" onPress={rota}> {botao} </Button>
    
  </Card>
  </ScrollView>

);

const styles = StyleSheet.create({
   img: {
    width: 400,
    //height: 'flex',
  }, 

  titulo: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },

  corpo: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'justify',
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: 'red',
    marginHorizontal:40,
    marginBottom:20,
    padding: 5, 
  },
  
});



export default Cards;
