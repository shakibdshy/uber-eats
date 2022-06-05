import { StyleSheet } from "react-native";

export default StyleSheet.create({
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