import React from 'react';

import {CommonActions, NavigationContainerRef} from '@react-navigation/native';

import {AvailableScreenName} from './routerTypes';

const navigationRef = React.createRef<NavigationContainerRef>();
const isNavigationReadyRef =
  React.createRef<boolean>() as React.MutableRefObject<boolean>;

const dispatchNavigate = (options: {name: string; params?: object}) => {
  if (isNavigationReadyRef.current && navigationRef.current) {
    return navigationRef.current.dispatch(CommonActions.navigate(options));
  }

  return null;
};

const getCurrentRouteName = () => {
  if (isNavigationReadyRef.current && navigationRef.current) {
    return navigationRef.current.getCurrentRoute()?.name as AvailableScreenName;
  }

  return undefined;
};

const getCurrentRouteKey = () => {
  if (isNavigationReadyRef.current && navigationRef.current) {
    return navigationRef.current.getCurrentRoute()?.key;
  }

  return undefined;
};

export {
  navigationRef,
  isNavigationReadyRef,
  dispatchNavigate,
  getCurrentRouteName,
  getCurrentRouteKey,
};
