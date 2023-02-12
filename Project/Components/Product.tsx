import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import Ustyles from "../Styles";
import { IProduct } from "./Products_Type";


// A component to display a single product
export const Product = ({data, navigation} : {data:IProduct, navigation?:any})=> {
    const [itemCount, setItemCount] = React.useState(0);
    const handleAddToCart = () => {
      setItemCount(itemCount + 1);
      console.log(`Item: id: ${data.id}; brand: ${data.brand} added to cart. Cart count: ${itemCount + 1}`);
    };
  
    return (
      <View style={Ustyles.product}>
        <TouchableOpacity 
          style={{backgroundColor: "lightgray", padding: 2}}
          onPress={()=> {
              if(navigation){
                navigation.navigate('Detailed_ProductsScreen',{productId:data.id});
                console.log(data.id);
              }else{
                console.log('does not work');
              }
            }
          }
        >
          <Image source={{ uri: data.image }} style={Ustyles.productImage} />
            <Text style={Ustyles.productTitle}>{data.title}</Text>
          <Text style={Ustyles.productPrice}>{data.price}</Text>
        </TouchableOpacity>
        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
    );
};
