import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

const DishItem = ({ dish }) => {

  return (
    <View style={styles.dishContainer}>
      <View style={styles.dishItem}>
        <View style={styles.dishContent}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>
          <Text style={styles.dishPrice}>{dish.price}</Text>
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

const styles = StyleSheet.create({
  dishContainer: {
    paddingHorizontal: 20,
  },

  dishItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
    flexDirection: 'row',
    alignItems: 'center',
  },

  dishContent: {
    flex: 1,
  },

  dishImage: {
    height: 75,
    aspectRatio: 1,
    marginLeft: 20,
  },

  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  dishDescription: {
    color: 'gray',
    marginVertical: 5,
  },

  dishPrice: {
    fontSize: 17,
    fontWeight: 'bold',
  }
})