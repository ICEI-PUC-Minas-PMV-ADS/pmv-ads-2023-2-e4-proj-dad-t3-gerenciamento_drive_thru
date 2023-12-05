// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = () => {
    
    console.log('Login pressed');
  };

  const handleRegistration = () => {

    navigation.navigate('Registration');
  };

  return (

    <View style={stylesLogin.container}>
      <Text style={stylesLogin.appName}>Drive Xpress</Text>

      <View style={stylesLogin.inputContainer}>
        <TextInput
          style={stylesLogin.input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={stylesLogin.inputContainer}>
        <TextInput
          style={stylesLogin.input}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            //source={showPassword ? require('../assets/img/eyeopen.png') : require('../assets/img/eyeclosed.png')}
            style={stylesLogin.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={stylesLogin.loginButton} onPress={handleLogin}>
        <Text style={stylesLogin.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegistration}>
        <Text style={stylesLogin.registerButton}>Não sou cadastrado</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  eyeIcon: {
    width: 20,
    height: 10,
    marginLeft: -30,
  },
  loginButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 20,
    color: 'black',
    fontSize: 16,
  },
});

export default LoginScreen;