import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 20,
    },
    
    orderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1,
    },

    OrderContent: {
        marginLeft: 10,
        flex: 1,
    },

    Title: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 5,
    },

    Text: {
        color: "#888",
    }
})