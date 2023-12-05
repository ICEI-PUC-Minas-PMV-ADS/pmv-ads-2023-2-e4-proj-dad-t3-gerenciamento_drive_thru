import * as React from 'react';
import{StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';
import Header from "../components/Header"
import { useNavigation } from "@react-navigation/native";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  const navigation = useNavigation();
  return (
    
    <Header title={"Pesquisar"}>
    <Searchbar 
    style={styles.barra}
      placeholder="O que você deseja comer hoje? "
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </Header>
  );
};
const styles = StyleSheet.create({barra:{marginTop:5},})

export default MyComponent;