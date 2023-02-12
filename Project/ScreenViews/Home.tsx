import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Header from '../Components/Header';
import Ustyles from '../Styles';
import { Categories } from './Categories';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detained_ProductsScreen } from './Detained_ProductsScreen';



const Stack = createNativeStackNavigator();

// The Home Screen Component
const HomeScreen = () => {
  const currentProductId = React.useState(0);
  return (
  <SafeAreaView style={{...Ustyles.container}}>
    <Header title={"E-Commerce App"}/>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home_Product_Page' component={Categories}/>
      <Stack.Screen name='Detailed_ProductsScreen' component={Detained_ProductsScreen} initialParams={{ productId: currentProductId }}/>
    </Stack.Navigator>
  </SafeAreaView>
  );
};

export default HomeScreen