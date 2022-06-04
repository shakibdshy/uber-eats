import { View, Text, FlatList } from 'react-native'
import restaurants from '../../assets/data/restaurants.json'
import RestaurantItem from '../components/RestaurantItem'

const Home = () => {
  return (
      <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantItem restaurant={item} />}
          showsVerticalScrollIndicator={false}
      />
  )
}

export default Home