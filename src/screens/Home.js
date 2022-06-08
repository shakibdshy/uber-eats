import { View, StyleSheet, FlatList } from 'react-native'
import restaurants from '../../assets/data/restaurants.json'
import RestaurantItem from '../components/RestaurantItem/RestaurantItem'

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantItem restaurant={item} />}
          showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});