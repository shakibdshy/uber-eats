import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import styles from './DishItemStyle'

const DishItem = ({ dish }) => {

  return (
    <View style={styles.dishContainer}>
      <View style={styles.dishItem}>
        <View style={styles.dishContent}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
          <Text style={styles.dishPrice}>$ {dish.price}</Text>
        </View>
        {
          dish.image && (
            <Image
              source={{
                uri: dish.image,
              }}
              style={styles.dishImage}
            />
          )
        }
      </View>
    </View>
  )
}

export default DishItem