import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Categories from '../Components/Categories';
import Header from '../Components/Header';
import Ustyles from '../Styles';

// The Home Screen Component
const HomeScreen = () => {
    return (
    <SafeAreaView style={{...Ustyles.container}}>
      <Header />
      <Categories />
    </SafeAreaView>
    );
  };

export default HomeScreen