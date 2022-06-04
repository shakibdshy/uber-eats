import { View, Text } from 'react-native'
import styles from '../styles/base';

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