import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {Color} from '../utils/color';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {rupiahFormat} from '../utils/formats';
import {RouterMainStackProps} from '../stack/mainStack';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import RadioGroup from 'react-native-radio-buttons-group';
// import {useNavigation} from '@react-navigation/native';
// import {MainStackNavigationProp} from '../stack/routerTypes';

type CartDetailRouteProp = RouteProp<RouterMainStackProps, 'CartDetail'>;

const CartList = () => {
  // const navigation = useNavigation<MainStackNavigationProp>(); //! INI BIKIN ERROR
  const {params} = useRoute<CartDetailRouteProp>();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: params.thumbnail}} />
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
