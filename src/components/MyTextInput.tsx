import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// TextInput customizado que estica por toda a largura disponível
export default function MyTextInput(props: any) {
  return (
    <TextInput
      {...props}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
