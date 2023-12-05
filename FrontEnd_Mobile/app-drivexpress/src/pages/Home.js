import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar, Text, FAB } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import Carousels from '../components/Carousels';
import Container from '../components/Container';
import Body from '../components/Body';
import MenuBotton from "../navigatons/MenuBotton";


const Contatos = () => {
  

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();
  return (
    <Container>
      <Header title={'DriveXpress'}>
      <Body>
        
        <ScrollView>
        <Carousels />
        

        
          <FAB
            icon="food-outline"
            label='Hamburguer'
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />

          <FAB
            icon="food-takeout-box-outline"
            label='Japonesa'
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />

          <FAB
            icon="pizza"
            label='Pizza'
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />

          <FAB
            icon="glass-mug-variant"
            label='Bebidas'
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />
        

        </ScrollView>
        
      </Body>
      
      </Header>
    </Container>

  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'relative',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
  },
})

export default Contatos;