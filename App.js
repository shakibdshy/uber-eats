import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Home from './src/screens/Home';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <RestaurantDetailsScreen />

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
