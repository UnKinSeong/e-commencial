import React from "react";
import { Button, Image, Text, View } from "react-native";
import Ustyles from "../Styles";


export type Product_T = {
    title:string,
    price:string,
    image:string,
    id   :string,
    brand:string
}
// A component to display a single product
export const Product = ({data} : {data: Product_T})=> {
    const [itemCount, setItemCount] = React.useState(0);
    const handleAddToCart = () => {
      setItemCount(itemCount + 1);
      console.log(`Item: id: ${data.id}; brand: ${data.brand} added to cart. Cart count: ${itemCount + 1}`);
    };
  
    return (
      <View style={Ustyles.product}>
        <Image source={{ uri: data.image }} style={Ustyles.productImage} />
        <Text style={Ustyles.productTitle}>{data.title}</Text>
        <Text style={Ustyles.productPrice}>{data.price}</Text>
        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
    );
};
