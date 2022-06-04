import { Text, View, Image } from 'react-native'
import styles from '../styles/RestaurantItemStyle'

const RestaurantItem = ({ restaurant }) => {
    return (
        <View style={styles.restaurantContainer}>
            <Image
                source={{
                    uri: restaurant.image,
                }}
                style={styles.restaurantImage}
            />
            <View style={styles.restaurantContent}>
                <View>
                    <Text style={styles.restaurantTitle}>{ restaurant.name }</Text>
                    <Text style={styles.restaurantSubtitle}>$ {restaurant.deliveryFee} {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}</Text>
                </View>
                <View>
                    <Text style={styles.restaurantRating}>{ restaurant.rating }</Text>
                </View>
            </View>
        </View>
    )
}

export default RestaurantItem