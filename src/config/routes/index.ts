import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { stackOptions } from './routesOptions';
import Main from '../../screens/Main';
import SignIn from '../../screens/SignIn';

export default createAppContainer(
  createStackNavigator({
    SignIn,
    Main,
  },
  stackOptions),
);
