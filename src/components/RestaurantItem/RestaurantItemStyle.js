import { StyleSheet } from "react-native";

export default StyleSheet.create({
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