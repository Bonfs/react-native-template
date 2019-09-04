import { Platform } from 'react-native';
// @ts-ignore
import { StackNavigatorConfig } from 'react-navigation';

import colors from '../../theme/colors';

export const stackOptions: StackNavigatorConfig = {
  initialRouteName: 'SignIn',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
  headerTransitionPreset: 'fade-in-place',
  defaultNavigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: colors.primaryColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
};