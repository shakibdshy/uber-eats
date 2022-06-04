import {
    View,
    Image,
    FlatList,
    ActivityIndicator,
    Pressable,
    Text,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import restaurants from '../../assets/data/restaurants.json'
import styles from '../styles/RestaurantDetailsStyle'

const RestaurantDetailsScreen = () => {
    const restaurant = restaurants[0];

    return (
        <View style={styles.page}>
            <View>
                <Image
                    source={{
                        uri: restaurant.image,
                    }}
                    style={styles.restaurantImage}
                />
                <FontAwesome style={styles.icon} name="arrow-circle-left" size={32} color="black" />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.rating}>$ . {restaurant.rating} <FontAwesome name="star" size={16} color="#FDCC0D" /></Text>
            </View>
        </View>
    )
}

export default RestaurantDetailsScreen