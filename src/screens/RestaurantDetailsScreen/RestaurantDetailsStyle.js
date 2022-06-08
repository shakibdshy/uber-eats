import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
    },

    header: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    restaurantImage: {
        width: "100%",
        aspectRatio: 5 / 3,
    },

    icon: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
        color: "rgba(255, 255, 255, 0.8)",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 40,
    },

    rating: {
        fontSize: 18,
    },

    menuText: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
        paddingHorizontal: 20,
    }
})