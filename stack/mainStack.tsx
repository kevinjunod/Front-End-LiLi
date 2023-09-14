import * as React from 'react';

import CartList, {RouterCartListProps} from '../screens/cartList';
import CartDetail from '../screens/cartDetail';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {Color} from '../utils/color';

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
    <Stack.Navigator>
      <Stack.Screen name="CartList" component={CartList} />
      <Stack.Screen
        name="CartDetail"
        component={CartDetail}
        options={{
          title: 'Cart Detail',
          headerStyle: {
            backgroundColor: Color.whiteSmoke,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
