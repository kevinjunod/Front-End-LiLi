import * as React from 'react';

import CartList, {RouterCartListProps} from '../screens/cartList';
import CartDetail from '../screens/cartDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RouterMainStackProps = {
  CartList: NavigatorScreenParams<RouterCartListProps>;
  CartDetail: {
    thumbnail: string;
    name: string;
    price: number;
    quantity: number;
  };
};

const Stack = createStackNavigator<RouterMainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="CartList">
      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen
        name="CartDetail"
        component={CartDetail}
        options={{
          title: 'Cart Detail',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => <Text>Kembali</Text>,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
