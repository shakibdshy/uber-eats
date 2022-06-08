import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, Pressable } from 'react-native'
import styles from '../RestaurantItem/RestaurantItemStyle'

const RestaurantItem = ({ restaurant }) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Restaurant", { id: restaurant.id});
    }

    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
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
        </Pressable>
    )
}

export default RestaurantItem