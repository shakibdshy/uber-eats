import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './BasketScreenStyle'
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import BasketDishItem from './BasketDishItem';

const BasketScreen = () => {
    const restaurant = restaurants[0];
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.page}>
            <View style={styles.dishHeader}>
                <AntDesign style={styles.arrowLeft} name="arrowleft" size={32} color="black" />
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.yourItems}>Your Items</Text>
                <FlatList
                    data={restaurant.dishes}
                    renderItem={({ item }) => <BasketDishItem basketDish={item} />}
                />
            </View>
            
            <View style={styles.dishFooter}>
                <Text style={styles.buttonText}>Next </Text>
            </View>
        </View>
    )
}

export default BasketScreen