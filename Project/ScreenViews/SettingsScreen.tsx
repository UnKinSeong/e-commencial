import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Header from '../Components/Header';
import Ustyles from '../Styles';


export const CartScreen = () => {
  return (
      <SafeAreaView style={{...Ustyles.container}}>
          <Header title={"Cart"}/>
          <Text>Cart!</Text>
      </SafeAreaView>
  );
};

