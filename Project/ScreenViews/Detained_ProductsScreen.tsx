import React from 'react';
import {
  Text,
  SafeAreaView,
  Button
} from 'react-native';

import Header from '../Components/Header';
import Ustyles from '../Styles';
import { Exchanger } from '../utility/Exchanger';
import { View_ } from './ScreenView_Type';

export function Detained_ProductsScreen ({navigation,route}: {navigation?: any,route?:any}){
  return (
      <SafeAreaView style={{...Ustyles.container}}>
          <Header title={route?Exchanger.getInstance().getProductDetail({productId: route.params.productId}).title:'unavailable'}/>
          <Button title={'Go Back'} onPress={()=>{navigation?navigation.goBack():console.log("Bugs")}}/>
          <Text>Cart!</Text>
      </SafeAreaView>
  );
};