import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import BasketScreen from './src/screens/Basket/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen/DishDetailsScreen';
import Home from './src/screens/Home';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen/OrderDetailsScreen';
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <BasketScreen /> */}
      {/* <OrderScreen /> */}
      <OrderDetailsScreen />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
