import React, { Fragment, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import { Formik } from "formik";
// @ts-ignore
import logo from '../../../assets/logo.png';
import MyTextInput from '../../../components/MyTextInput';
import MyButton from '../../../components/MyButton';
import styles from '../styles';

interface Props {
  initialValues: any;
  handleSubmit: (values: any, { setSubmitting }: any) => void;
}

// all component layout here
export default function Login({ initialValues, handleSubmit }: Props) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      enabled={Platform.OS === 'ios'}
      behavior="padding"
    >
      <Image source={logo} />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {props => (
          <Fragment>
            <MyTextInput
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor="#999"
              name="email"
              type="email"
            />
            <MyTextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              placeholderTextColor="#999"
              name="password"
              type="password"
            />
            <MyButton
              title="Sign In"
              onPress={props.handleSubmit}
            />
            <MyButton
              type="outline"
              title="Sign Up"
              onPress={() => console.log('to sign up screen')}
            />
          </Fragment>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}