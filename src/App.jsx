import React from 'react';
import { StatusBar } from 'react-native';

import Router from './navigation';

import colors from './common/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <Router />
    </>
  );
};

export default App;
