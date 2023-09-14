import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../utils/color';
import axios from 'axios';
import {CartListType} from '../types/cardListTypes';
import {rupiahFormat} from '../utils/formats';
import CartItem from '../components/cartItem';
// import {useNavigation} from '@react-navigation/native';
// import {MainStackNavigationProp} from '../stack/routerTypes';

export type RouterCartListProps = undefined;

const CartList = () => {
  // const navigation = useNavigation<MainStackNavigationProp>(); //! INI BIKIN ERROR
  const [cartList, setCartList] = useState<CartListType[]>([]);
  // const [grandTotal, setGrandTotal] = useState(0);
  // const [isCheckAll, setCheckAll] = useState(false);
  // const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState<CartListType[]>([]);

  useEffect(() => {
    setList(cartList);
  }, [list, cartList]);

  const getCartListItems = () => {
    axios
      .get('http://localhost:9000/carts')
      .then(function (response: any) {
        setCartList(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const removeCartItem = (id: number) =>
    axios
      .post(`http://localhost:9000/carts/${id}`, {
        id: id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  const updateCartItem = (id: number) =>
    axios
      .patch(`http://localhost:9000/carts/${id}`, {
        id: id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  useEffect(() => {
    getCartListItems();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>CART</Text>
        <View style={styles.dividerHeader} />
        <View style={styles.selectAll}>
          <View>
            <Text style={styles.fontBold}>Pilih Semua</Text>
          </View>
          <TouchableOpacity>
            <Text onPress={() => {}} style={{color: Color.turquoise}}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dividerHeader} />
        {cartList.map(item => {
          return (
            <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate('CartDetail', {
            //     name: item.name,
            //     price: item.price,
            //     quantity: item.quantity,
            //     thumbnail: item.thumbnailUrl,
            //   })
            // }
            >
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                thumbnail={item.thumbnailUrl}
                qty={item.quantity}
              />
            </TouchableOpacity>
          );
        })}
        <View style={styles.footer}>
          <Text style={{}}>X Products</Text>
          <Text style={styles.fontBold}>{rupiahFormat.format(1000000)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fontBold: {fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  container: {
    marginVertical: 32,
    paddingHorizontal: 16,
    flex: 1,
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
