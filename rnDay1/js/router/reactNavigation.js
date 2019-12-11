import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import page1 from '../page/index1'
import page2 from '../page/page2'


const AppStack = createStackNavigator(
    { 
      Home: {screen : page1}, 
      User: {screen : page2},  
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
  ); 
  const RootNavigator = createSwitchNavigator(
    {
      AuthLoading: Login,
      App: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );
