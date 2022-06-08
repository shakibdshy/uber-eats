import {
    View,
    FlatList,
} from "react-native";
import restaurants from '../../../assets/data/restaurants.json';
import styles from '../RestaurantDetailsScreen/RestaurantDetailsStyle';
import DishItem from '../../components/DishItem/DishItem';
import Header from './RestaurantDetailsHeader';
import RestaurantDetailsHeader from "./RestaurantDetailsHeader";
import { useRoute } from "@react-navigation/native";


const RestaurantDetailsScreen = () => {
    const restaurant = restaurants[0];
    const route = useRoute();

    const id = route.params?.id;    
    console.log(id);

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={<RestaurantDetailsHeader restaurant={restaurant}  />}
                data={restaurant.dishes}
                renderItem={({ item }) => <DishItem dish={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default RestaurantDetailsScreen