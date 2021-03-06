import {
    View,
    Image,
    Text,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import styles from './RestaurantDetailsStyle';
import { useNavigation } from "@react-navigation/native";

const RestaurantDetailsHeader = ({ restaurant }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <View>
                <Image
                    source={{
                        uri: restaurant.image,
                    }}
                    style={styles.restaurantImage}
                />
                <FontAwesome style={styles.icon}
                    onPress={ () => navigation.goBack() }
                    name="arrow-circle-left" size={32} color="black" />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.rating}>$ . {restaurant.rating} <FontAwesome name="star" size={16} color="#FDCC0D" /></Text>
            </View>
            <Text style={styles.menuText}>Menu</Text>
        </View>
    )
}

export default RestaurantDetailsHeader