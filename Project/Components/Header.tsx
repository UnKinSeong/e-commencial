import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Ustyles from '../Styles';

// A component to display header of the screen
const Header = () => {
    return (
      <View style={Ustyles.header}>
        <Text style={Ustyles.headerTitle}>E-Commerce App (clothes)</Text>
      </View>
    );
};
export default Header