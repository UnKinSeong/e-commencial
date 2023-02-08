import React from "react";
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Product, Product_T } from "./Product";

// A component to display list of products

const Products = ({TTypes, products}: {TTypes: string, products: Product_T[]}) => {
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
            key = { index }
          />
        ))}
      </ScrollView>
    );
  };

export default Products;