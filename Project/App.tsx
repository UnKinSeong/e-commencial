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
const Product = ({title, price, image}: {title: string, price: string, image: string}) => {
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
      title: 'product '+(i+1),
      price: '$40',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC',
    });
  }
  return (
    <ScrollView contentContainerStyle={{...styles.productsContainer, flexGrow: 1}} style={{flexDirection: 'row', flexWrap:'wrap'}}>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
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