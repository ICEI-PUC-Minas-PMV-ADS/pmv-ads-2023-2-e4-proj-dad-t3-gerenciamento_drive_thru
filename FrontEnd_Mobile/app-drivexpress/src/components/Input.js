import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
      mode='outlined'
    />
  );
};

const styles = StyleSheet.create ({
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8,
    borderColor: 'black',
    color: 'black'
  }
});

export default Input;