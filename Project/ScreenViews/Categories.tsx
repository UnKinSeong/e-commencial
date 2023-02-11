import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { IProduct } from '../Components/Products_Type';
import Products from '../Components/Products';
import { Exchanger } from '../utility/Exchanger';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// A component to display category filter
const Categories = () => {
  const products = Exchanger.getInstance().getProducts();
  return(
    <Tab.Navigator>
      <Stack.Screen name="All">
        {props => <Products {...props} TTypes={"All"} products={products.slice(0, 40)} />}
      </Stack.Screen>
      <Stack.Screen name="Nike">
        {props => <Products {...props} TTypes={"Nike"} products={products.slice(0, 20)}/>}
      </Stack.Screen>
      <Stack.Screen name="Louis Vuitton">
        {props => <Products {...props} TTypes={"Louis Vuitton"} products={products.slice(20, 40)} />}
      </Stack.Screen>
    </Tab.Navigator>
  );
}
export default Categories;