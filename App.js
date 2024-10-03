import { Text, SafeAreaView, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';
import { AntDesign } from '@expo/vector-icons';

// Sample Data (You will replace this with your actual data)
const data = [
  {
    id: '1',
    product: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop DeVang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    product: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    product: 'Xe can cau da nang',
    shop: 'The goi do choi',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '4',
    product: 'Do choi dang mo hinh',
    shop: 'The gioi do choi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '4',
    product: 'Lanh dao gian don',
    shop: 'Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  }
];

const ProductItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.textContainer}>  
      <Text style={styles.productTitle}>{item.product}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>     
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#66ccff',
      }}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text> Chat </Text>
        <Image
          source={require('./assets/bi_cart-check.png')}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 70,
    height: 60,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    color: 'gray',
  },
  chatButton: {
    backgroundColor: '#FF5252', // Red background for the button
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});