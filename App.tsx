/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  navigationRef,
  isNavigationReadyRef,
  getCurrentRouteName,
} from './stack/navigationService';

import CartList from './screens/cartList';
import CartDetail from './screens/cartDetail';
import Root from './stack/root';

function App(): JSX.Element {
  const routeNameRef = useRef<string>();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isNavigationReadyRef.current = true;
        routeNameRef.current = getCurrentRouteName();
      }}>
      <SafeAreaView>
        <StatusBar />
        <Root />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
