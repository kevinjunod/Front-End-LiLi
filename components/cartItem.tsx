import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {rupiahFormat} from '../utils/formats';
import {Color} from '../utils/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../stack/routerTypes';
import CheckBox from '@react-native-community/checkbox';
import {CartListType} from '../types/cardListTypes';

export interface CartItemTypes {
  product: CartListType;
  price: number;
  deleteItem: () => void;
  increase: () => void;
  decrease: () => void;
  toggleCheckbox: (id: number) => void;
}

export const CartList = ({
  product,
  price,
  deleteItem,
  increase,
  decrease,
  toggleCheckbox,
}: CartItemTypes) => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const {name, isChecked, thumbnailUrl, quantity, id} = product;
  return (
    <React.Fragment>
      <View style={styles.cartItemContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CartDetail', {
                name,
                price,
                quantity,
                thumbnail: thumbnailUrl,
              })
            }>
            <View style={styles.checkboxContainer}>
              <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={() => toggleCheckbox(id)}
                style={styles.checkbox}
                onFillColor={Color.yellowCorn}
                onTintColor={Color.yellowStatus}
                onCheckColor={Color.yellowStatus}
                boxType="circle"
              />
              <Image source={{uri: thumbnailUrl}} style={styles.thumbnail} />
            </View>
          </TouchableOpacity>
          <View style={styles.nameContainer}>
            <Text>{name}</Text>
            <View style={styles.qtyContainer}>
              <TouchableOpacity
                onPress={decrease}
                style={styles.qtyAdjuster}
                disabled={quantity === 1}>
                <Text
                  style={{
                    ...styles.buttonQty,
                    color: quantity === 1 ? Color.lightGrey : Color.black,
                  }}>
                  -
                </Text>
              </TouchableOpacity>
              <View style={styles.qtyButtonsNumber}>
                <Text>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={increase} style={styles.qtyAdjuster}>
                <Text style={styles.buttonQty}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <TouchableOpacity onPress={deleteItem}>
            <Text style={styles.textAlignRight}>X</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.fontBold}>{rupiahFormat.format(price)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  checkbox: {height: 24, width: 24, marginRight: 8},
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonQty: {fontSize: 16, fontWeight: 'bold'},
  textAlignRight: {textAlign: 'right'},
  flexRow: {flexDirection: 'row'},
  priceContainer: {
    alignContent: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fontBold: {fontWeight: 'bold'},
  thumbnail: {height: 75, width: 75, borderRadius: 8},
  nameContainer: {flexDirection: 'column', marginLeft: 12, maxWidth: 150},
  qtyButtonsNumber: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.chineseSilver,
    alignItems: 'center',
    flex: 1,
  },
  qtyButtons: {
    alignItems: 'center',
    flex: 1,
  },
  qtyAdjuster: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: 4,
    alignSelf: 'center',
    flex: 1,
  },
  cartItemContainer: {
    flexDirection: 'row',
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  qtyContainer: {
    marginTop: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.chineseSilver,
    width: 99,
    height: 30,
    alignItems: 'center',
    alignContent: 'center',
  },
  divider: {
    paddingTop: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.chineseSilver,
  },
});

export default CartList;
