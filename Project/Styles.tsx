import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const itemsPerRow = 2;
const { width: screenWidth } = Dimensions.get('screen');
const itemWidth = (screenWidth - 20 * (itemsPerRow + 1)) / itemsPerRow;
const itemMargin = (screenWidth - itemWidth * itemsPerRow) / (itemsPerRow * 2);
const itemHeight = itemWidth*1.3;
const Ustyles = StyleSheet.create({
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
        height: itemHeight+100,
        marginRight: itemMargin,
        marginLeft: itemMargin,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
      },
      productImage: {
        height: itemHeight,
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
export default Ustyles;