import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasketScreen from '../screens/Basket/BasketScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen/DishDetailsScreen';
import Home from '../screens/Home';
import OrderDetailsScreen from '../screens/OrderDetailsScreen/OrderDetailsScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default RootNavigator;