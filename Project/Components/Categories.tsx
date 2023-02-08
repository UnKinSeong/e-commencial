import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Products from './Products';
import { Product_T } from './Product';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// A component to display category filter
const Categories = () => {
    
    let products:Product_T[] = [];
    for (let i = 0; i < 20; i++) {
        products.push({
            title: 'product '+(i+1),
            price: '$40',
            image: 'https://nikecompanyblog.files.wordpress.com/2015/05/nike1.jpg',
            brand: 'Nike',
            id: ''+(i+1),
        });
    }
    for (let i = 20; i < 40; i++) {
        products.push({
            title: 'product '+(i+1),
            price: '$40',
            image: 'https://thumbs.dreamstime.com/b/louis-vuitton-logo-popular-clothing-brand-famous-luxury-vector-icon-zaporizhzhia-ukraine-may-222305651.jpg',
            brand: 'Louis Vuitton',
            id: ''+(i+21),
        });
    }
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