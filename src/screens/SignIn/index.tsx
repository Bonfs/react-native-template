import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { useDispatch } from 'react-redux';

import User from '../../models/User';
import { saveUser } from '../../actions/userActions';
import Layout from './Layout';

// all component logic here
function SignIn({ navigation }: any) {
  const dispatch = useDispatch();
  const [email] = useState('');
  const [password] = useState('');

  function handleSubmit(values: any, { setSubmitting }: any) {
    console.log(values);
    const user = new User('Bonfs', 'matheusbonfim05@gmail.com');
    dispatch(saveUser(user));

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });

    navigation.dispatch(resetAction);
  }

  return (
    <Layout
      initialValues={{ email, password }}
      handleSubmit={handleSubmit} 
    />
  );
}

SignIn.navigationOptions = ({ navigation }: any) => {
  return {
    header: null,
  };
};

export default SignIn;