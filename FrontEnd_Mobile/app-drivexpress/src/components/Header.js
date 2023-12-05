import React, { useRef, useState } from "react";
import { DrawerLayoutAndroid, StyleSheet, View } from "react-native";
import { Appbar, Drawer, Divider, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";



const Header = ({ title, children }) => {
  const navigation = useNavigation();
  const drawer = useRef(null);
  const [drawerPosition] = useState("right");  

  const navigationView = () => (
    <View>

    <View>
    <Appbar.Header style={styles.barra}>
    <Appbar.Content title= {title} />
    </Appbar.Header>
    </View>    


      <Drawer.Section style={styles.menu}>
        <View style={styles.espacamento} />

        <Drawer.Item
          icon="home"
          label="Home"
          onPress={() => navigation.navigate("Home")}
        />
        
          <Drawer.Item
          icon="account-outline"
          label="Login"
          onPress={() => navigation.navigate("Login")}
        /> 
        
         
         <Drawer.Item
          icon="folder-plus-outline"
          label="Cadastro"
          onPress={() => navigation.navigate("Cadastro")}
        />
        <Drawer.Item
          icon="storefront-outline"
          label="Restaurantes"
          onPress={() => navigation.navigate("Restaurantes")}
        />
        

       
        <Divider />
        <Drawer.Item
          icon="email-fast-outline"
          label="Sugestões"
          onPress={() => navigation.navigate("Sugestao")}
        />
        <Drawer.Item
          icon="contacts-outline"
          label="Contatos"
          onPress={() => navigation.navigate("Contatos")}
        />
        <Drawer.Item
          icon="file-document-edit-outline"
          label="Termos de uso"
          onPress={() => navigation.navigate("Termos")}
        />
      </Drawer.Section>
    </View>
  );

  return (   


      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <Appbar.Header style={styles.header}>
            <Appbar.Content title= {title} color="red"  />
            <Appbar.Action
              icon="account-circle-outline"
              color="red"
              onPress={() => drawer.current.openDrawer()}
            />
          </Appbar.Header>
          
        </View>
          {children}
      </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  barra: {
    backgroundColor: "red",
  },
  espacamento: {
    paddingTop: 40,
  },
});
export default Header;
