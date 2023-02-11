import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Header from '../Components/Header';
import Ustyles from '../Styles';
import Categories from './Categories';
// The Home Screen Component
const HomeScreen = () => {
  return (
    <SafeAreaView style={{...Ustyles.container}}>
      <Header title={"E-Commerce App (clothes)"}/>
      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen