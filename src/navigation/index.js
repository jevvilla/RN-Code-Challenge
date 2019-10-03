import { createStackNavigator, createAppContainer } from 'react-navigation';

import Overview from '../screens/Overview';

import * as routes from './routes';

const stackNavigator = createStackNavigator({
  [routes.OVERVIEW]: {
    screen: Overview,
  },
});

export default createAppContainer(stackNavigator);
