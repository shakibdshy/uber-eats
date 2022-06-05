import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './DishDetailsScreenStyle'
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';

const DishDetailsScreen = () => {
    const restaurant = restaurants[0].dishes[0];
    const [quantity, setQuantity] = useState(1);

    const itemDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const itemIncrease = () => {
        setQuantity(quantity + 1);
    }

    const getTotal = () => {
        return (restaurant.price * quantity).toFixed(2);
    };

    return (
        <View style={styles.page}>
            <View style={styles.dishHeader}>
                <AntDesign style={styles.arrowLeft} name="arrowleft" size={32} color="black" />
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.description}>{restaurant.description}</Text>
            </View>
            <View style={styles.dishCount}>
                <AntDesign onPress={itemDecrease} name="minuscircleo" size={44} color="black" />
                <Text style={styles.countNumber}>{quantity}</Text>
                <AntDesign onPress={itemIncrease} name="pluscircleo" size={44} color="black" />
            </View>
            <View style={styles.dishFooter}>
                <Text style={styles.buttonText}>Add {quantity} to basket &#8226; ${getTotal()}</Text>
            </View>
        </View>
    )
}

export default DishDetailsScreen