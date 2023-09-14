import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './mainStack';

import type {RouterMainStackProps} from './mainStack';

export type RouterRootStackProps = {
  Main: NavigatorScreenParams<RouterMainStackProps>;
};

const Stack = createStackNavigator<RouterRootStackProps>();

const Root = () => {
  return (
    <Stack.Navigator initialRouteName="Main" headerMode="none">
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
};

export default Root;
