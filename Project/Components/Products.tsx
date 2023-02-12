import React from "react";
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Product } from "./Product";
import { IProduct } from "./Products_Type";

// A component to display list of products

const Products = ({TTypes, products, navigation}: {TTypes: string, products: IProduct[], navigation?:any}) => {
    const styles = StyleSheet.create({
        productsContainer: {
            flex: 1,
            marginTop: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
    });
    
    // TTypes is used as a filter for fetching data from database.
    /*
      Code for fetching
    */
    return (
      <ScrollView contentContainerStyle={{...styles.productsContainer, flexGrow: 1}} style={{flexDirection: 'row', flexWrap:'wrap'}}>
        {products.map((product,index) => (
          <Product
            data = { product }
            navigation = {navigation}
            key = { index }
          />
        ))}
      </ScrollView>
    );
  };

export default Products;