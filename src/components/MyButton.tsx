import React from 'react';
import { StyleSheet } from 'react-native';
// @ts-ignore
import { Button } from 'react-native-elements';

export default function MyButton(props: any) {
  return(
    <Button
      {...props}
      buttonStyle={styles.button}
      containerStyle={styles.button}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    height: 46,
    alignSelf: 'stretch',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});