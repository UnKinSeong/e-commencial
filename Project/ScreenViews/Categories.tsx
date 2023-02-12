import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { IProduct } from '../Components/Products_Type';
import Products from '../Components/Products';
import { Exchanger } from '../utility/Exchanger';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// A component to display category filter
export function Categories({navigation}:{navigation?:any}){
  const products = Exchanger.getInstance().getProducts();
  return(
    <Tab.Navigator>
      <Stack.Screen name="All">
        {props => <Products {...props} TTypes={"All"} products={products} navigation={navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="Nike">
        {props => <Products {...props} TTypes={"Nike"} products={products.filter((val)=>{return val.brand === 'Nike'})}  navigation={navigation}/>}
      </Stack.Screen>
      <Stack.Screen name="Louis Vuitton">
        {props => <Products {...props} TTypes={"Louis Vuitton"} products={products.filter((val)=>{return val.brand === 'Louis Vuitton'})}  navigation={navigation}/>}
      </Stack.Screen>
    </Tab.Navigator>
  );
}