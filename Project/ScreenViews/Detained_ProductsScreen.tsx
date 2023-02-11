import React from 'react';
import {
  Text,
  SafeAreaView,
} from 'react-native';
import Header from '../Components/Header';
import Ustyles from '../Styles';
import { View_ } from './ScreenView_Type';

export function CartScreen ({Prev}: {Prev: View_.IPosition}){
  return (
      <SafeAreaView style={{...Ustyles.container}}>
          <Header title={"Cart"}/>
          <Text>Cart!</Text>
      </SafeAreaView>
  );
};