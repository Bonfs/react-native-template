import React from 'react';
import { Platform, StatusBar } from "react-native";
import { ThemeProvider  } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './config/routes';
import rootReducer from './reducers';
import theme from './theme';
import colors from './theme/colors';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      {
        Platform.OS !== 'ios' &&
          <StatusBar
            backgroundColor={colors.primaryDarkColor}
            barStyle="light-content"
          />
      }
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
};
