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
import CheckBox from '@react-native-community/checkbox';

export type RouterCartListProps = undefined;

const CartList = () => {
  const [cartList, setCartList] = useState<CartListType[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const selectAllItems = () => {
    const updatedCart = cartList?.map(item => ({
      ...item,
      isChecked: allSelected ? !item.isChecked : true,
    }));
    setCartList(updatedCart);
  };

  const getCartListItems = () => {
    axios
      .get('http://localhost:9000/carts')
      .then(function (response: any) {
        const updatedResponse = response.data.map((obj: CartListType) => {
          return {...obj, isChecked: true};
        });

        setCartList(updatedResponse);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const removeCartItems = (id?: number) => {
    if (id) {
      axios
        .delete(`http://localhost:9000/carts/${id}`, {params: {id}})
        .then(() => {
          setCartList(prevState => prevState.filter(item => item.id !== id));
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      const selectedItems = cartList?.filter(item => item.isChecked);
      const deletePromises = selectedItems.map(item =>
        axios.delete(`http://localhost:9000/carts/${item.id}`, {
          params: {id: item.id},
        }),
      );

      Promise.all(deletePromises)
        .then(() => {
          setCartList(prevState => prevState.filter(item => !item.isChecked));
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getCartListItems();
  }, []);

  const grandTotal = cartList
    ?.map(obj => obj.price * obj.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  const totalProducts = cartList
    ?.map(obj => obj.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  const increaseQty = (id: number) => {
    const updatedCart = cartList?.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    setCartList(updatedCart);
  };

  const decreaseQty = (id: number) => {
    const updatedCart = cartList?.map(item => {
      if (item.id === id) {
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    setCartList(updatedCart);
  };

  useEffect(() => {
    const isAllSelected = cartList?.every(item => item.isChecked);
    if (cartList?.length > 0) {
      setAllSelected(isAllSelected);
    }
  }, [cartList]);

  const toggleItemSelection = (id: number) => {
    const updatedCart = cartList?.map(item => {
      if (item.id === id) {
        return {...item, isChecked: !item.isChecked};
      }
      return item;
    });
    setCartList(updatedCart);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>CART</Text>
        {cartList?.length !== 0 && (
          <>
            <View style={styles.dividerHeader} />
            <View style={styles.selectAll}>
              <View style={styles.checkAll}>
                <CheckBox
                  disabled={false}
                  value={allSelected}
                  onValueChange={() => selectAllItems()}
                  style={styles.checkboxAll}
                  onFillColor={Color.yellowCorn}
                  onTintColor={Color.yellowStatus}
                  onCheckColor={Color.yellowStatus}
                  boxType="circle"
                />
                <Text style={styles.fontBold}>Pilih Semua</Text>
              </View>
              <TouchableOpacity onPress={() => removeCartItems()}>
                <Text style={{color: Color.turquoise}}>Delete</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dividerHeader} />
          </>
        )}

        {cartList?.map(item => {
          return (
            <CartItem
              key={item.id}
              product={item}
              price={item.quantity * item.price}
              deleteItem={() => removeCartItems(item.id)}
              increase={() => increaseQty(item.id)}
              decrease={() => decreaseQty(item.id)}
              toggleCheckbox={() => toggleItemSelection(item.id)}
            />
          );
        })}
        <View style={styles.footer}>
          <Text style={{}}>{totalProducts} Products</Text>
          <Text style={styles.fontBold}>{rupiahFormat.format(grandTotal)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checkAll: {flexDirection: 'row', alignItems: 'center'},
  checkboxAll: {height: 24, width: 24, marginRight: 8},
  fontBold: {fontWeight: 'bold'},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  container: {
    marginVertical: 32,
    paddingHorizontal: 16,
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
    alignItems: 'center',
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
