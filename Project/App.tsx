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

const itemsPerRow = 2;
const screenWidth = Dimensions.get('screen').width;
const itemWidth = (screenWidth - 20 * (itemsPerRow + 1)) / itemsPerRow;
const itemMargin = (screenWidth - itemWidth * itemsPerRow) / (itemsPerRow * 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
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
  categoriesContainer: {
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
  productContainer: {
    width: itemWidth,
    height: '33.3%',
    marginRight: itemMargin,
    marginLeft: itemMargin,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  productImage: {
    height: '60%',
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
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>E-Commerce App</Text>
    </View>
  );
};

// A component to display category filter
const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
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
const Product = ({title, price, image}: {title: string, price: string, image: string}) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  );
};


// A component to display list of products
const Products = () => {
  return (
    <ScrollView contentContainerStyle={{ ...styles.productsContainer, flexDirection: 'row', flexWrap: 'wrap' }}>
  <Product title="Product 1" price="$100" image={"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400"} />
  <Product title="Product 2" price="$200" image={"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400"} />
  <Product title="Product 3" price="$300" image={"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400"} />
  <Product title="Product 4" price="$300" image={"https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400"} />
  </ScrollView>
  );
  };
  
  const App = () => {
  return (
  <SafeAreaView style={styles.container}>
  <Header />
  <Categories />
  <Products />
  </SafeAreaView>
  );
  };
  
  export default App;