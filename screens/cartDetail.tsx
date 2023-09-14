import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Color} from '../utils/color';
import {Text} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RouterMainStackProps} from '../stack/mainStack';
import {rupiahFormat} from '../utils/formats';

type CartDetailRouteProp = RouteProp<RouterMainStackProps, 'CartDetail'>;

const CartList = () => {
  const {params} = useRoute<CartDetailRouteProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: params.thumbnail,
          }}
          style={styles.thumbnailSize}
        />
        <View style={styles.padding}>
          <Text style={styles.name}>{params.name}</Text>
          <Text style={styles.price}>
            Harga: {rupiahFormat.format(params.price)}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.qty}>Quantity: {params.quantity}</Text>
          <Text style={styles.qty}>
            Grand Total: {rupiahFormat.format(params.price * params.quantity)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: Color.whiteSmoke,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {fontWeight: '600', fontSize: 14},
  padding: {padding: 12},
  thumbnailSize: {height: 250, width: '100%'},
  name: {fontWeight: 'bold', fontSize: 32},
  price: {fontWeight: '600', fontSize: 24},
  qty: {fontWeight: 'bold', fontSize: 16},

  fontBold: {fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  container: {
    flex: 1,
    paddingBottom: 99,
  },
  sectionTitle: {fontSize: 24, fontWeight: 'bold'},
  dividerHeader: {
    paddingTop: 12,
    borderBottomWidth: 3,
    marginHorizontal: -16,
    borderBottomColor: Color.chineseSilver,
  },
  divider: {
    paddingTop: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.chineseSilver,
  },
  selectAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default CartList;
