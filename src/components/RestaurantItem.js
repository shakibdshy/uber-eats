import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

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
                    <Text style={styles.restaurantSubtitle}>{restaurant.deliveryFee} {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}</Text>
                </View>
                <View>
                    <Text style={styles.restaurantRating}>{ restaurant.rating }</Text>
                </View>
            </View>
        </View>
    )
}

export default RestaurantItem

const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        marginVertical: 10,
    },

    restaurantImage: {
        width: "100%",
        aspectRatio: 5 / 3,
    },

    restaurantContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },

    restaurantTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    restaurantSubtitle: {
        fontSize: 14,
        color: 'gray',
        fontWeight: '600',
    },

    restaurantRating: {
        fontSize: 16,
        fontWeight: 'bold',
        width: 40,
        height: 40,
        lineHeight: 40,
        borderRadius: 99999,
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
    }
})