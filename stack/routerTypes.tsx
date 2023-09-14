import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import type {RouterRootStackProps} from './root';
import type {RouterMainStackProps} from './mainStack';

export type RootNavigationProp = StackNavigationProp<RouterRootStackProps>;
export type MainStackNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RouterMainStackProps>,
  RootNavigationProp
>;

export type MainStackScreenNames = keyof RouterMainStackProps;

export type AvailableScreenName =
  | keyof RouterRootStackProps
  | keyof RouterMainStackProps;
