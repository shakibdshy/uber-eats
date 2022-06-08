import { View, Text } from 'react-native'
import styles from './OrderDetailsStyle'

const OrderDetailsItem = ({ basketDish }) => {    
  return (
      <View style={styles.dishContainer}>
          <Text style={styles.dishCount}>1</Text>
          <Text style={styles.dishName}>{basketDish.name }</Text>
          <Text style={styles.dishPrice}>$46</Text>
      </View>
  )
}

export default OrderDetailsItem