import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './OrderDetailsStyle'
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import OrderDetailsItem from './OrderDetailsItem';

const OrderDetailsScreen = () => {
    const restaurant = restaurants[0];
    const [quantity, setQuantity] = useState(1);

    return (
        <View style={styles.page}>
            <Image
                source={{ uri: restaurant.image }}
                style={{
                    width: "100%",
                    aspectRatio: 5 / 3,
                }}
            />
            <View style={styles.dishHeader}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={{color: '#888'}}>New . 2 days ago</Text>
                <Text style={styles.yourItems}>Your Orders</Text>
                <FlatList
                    data={restaurant.dishes}
                    renderItem={({ item }) => <OrderDetailsItem basketDish={item} />}
                />
            </View>

            <View style={styles.dishFooter}>
                <Text style={styles.buttonText}>Next</Text>
            </View>
        </View>
    )
}

export default OrderDetailsScreen