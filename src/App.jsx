import React from 'react';
import { StatusBar } from 'react-native';

import colors from './common/colors';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
    </>
  );
};

export default App;
