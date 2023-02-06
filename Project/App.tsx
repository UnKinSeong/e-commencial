import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const itemsPerRow = 3;
const { width: screenWidth } = Dimensions.get('screen');
const itemWidth = (screenWidth - 20 * (itemsPerRow + 1)) / itemsPerRow;
const itemMargin = (screenWidth - itemWidth * itemsPerRow) / (itemsPerRow * 2);
const itemHeight = itemWidth*1.3;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  categories: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContainer: {
    paddingHorizontal: 16,
  },
  categoryText: {
    fontWeight: 'bold',
  },
  productsContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  product: {
    width: itemWidth,
    height: itemHeight,
    marginRight: itemMargin,
    marginLeft: itemMargin,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  productImage: {
    height: itemHeight-55,
    width: '100%',
  },
  productTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
  productPrice: {
    marginTop: 5,
    fontSize: 14,
  },
});


// A component to display header of the screen
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>E-Commerce App (clothes)</Text>
    </View>
  );
};

// A component to display category filter
const Categories = () => {
  return (
    <View style={styles.categories}>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>All</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Electronics</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>Fashion</Text>
      </View>
    </View>
  );       
};

// A component to display a single product
const Product = ({title, price, image, id}: {title: string, price: string, image: string, id: string}) => {
  return (
  <View style={styles.product}>
  <Image source={{ uri: image }} style={styles.productImage} />
  <Text style={styles.productTitle}>{title}</Text>
  <Text style={styles.productPrice}>{price}</Text>
  </View>
  );
};



// A component to display list of products
const Products = () => {
  const products = [];
  for (let i = 0; i < 20; i++) {
    products.push({
    id: ''+(i+1),
    title: 'product '+(i+1),
    price: '$40',
    image: 'https://www.jaipuriaschoolpatna.in/wp-content/uploads/2016/11/blank-img-300x300.jpg',
    });
  }
  return (
    <ScrollView contentContainerStyle={{...styles.productsContainer, flexGrow: 1}} style={{flexDirection: 'row', flexWrap:'wrap'}}>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price + ' id: ' + product.id}
          image={product.image}
          id={product.id}
        />
      ))}
    </ScrollView>
  );
};



const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
  <SafeAreaView style={{...styles.container}}>
    <Header />
    <Categories />
    <Products />
  </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

  
export default App;