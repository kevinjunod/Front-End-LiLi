import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {rupiahFormat} from '../utils/formats';
import {Color} from '../utils/color';

export interface CartItemTypes {
  name: string;
  price: number;
  qty: number;
  thumbnail: string;
  isTicked?: boolean;
}

export const CartList = ({name, price, qty, thumbnail}: CartItemTypes) => {
  return (
    <React.Fragment>
      <View style={styles.cartItemContainer}>
        <View style={styles.flexRow}>
          <View>
            <Image source={{uri: thumbnail}} style={styles.thumbnail} />
          </View>
          <View style={styles.nameContainer}>
            <Text>{name}</Text>
            <View style={styles.qtyContainer}>
              <View style={styles.qtyButtons}>
                <Text>-</Text>
              </View>
              <View style={styles.qtyButtonsNumber}>
                <Text>{qty}</Text>
              </View>
              <View style={styles.qtyButtons}>
                <Text>+</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.textAlignRight}>X</Text>
          </View>
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
  textAlignRight: {textAlign: 'right'},
  flexRow: {flexDirection: 'row'},
  priceContainer: {
    alignContent: 'flex-end',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fontBold: {fontWeight: 'bold'},
  thumbnail: {height: 75, width: 75, borderRadius: 8},
  nameContainer: {flexDirection: 'column', marginLeft: 12},
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
