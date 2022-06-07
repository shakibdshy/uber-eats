import { View, Text, Image } from 'react-native'
import styles from './OrderItemStyle'

const OrderItem = ({ order }) => {
    return (
        <View style={styles.page}>
            <View style={styles.orderContainer}>
                <View style={styles.image}>
                    <Image source={{ uri: order.Restaurant.image }} style={{ width: 100, height: 100 }} />
                </View>
                <View style={styles.OrderContent}>
                    <Text style={styles.Title}>{order.Restaurant.name}</Text>
                    <Text style={styles.Text}>3 items $38.45</Text>
                    <Text style={styles.Text}>2 days ago &#8226; {order.status}</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderItem