import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
    },

    dishHeader: {
        margin: 15,
        paddingBottom: 10,
    },

    yourItems: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: "600",
    },

    name: {
        fontSize: 32,
        fontWeight: "bold",
    },

    dishContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1,
    },

    dishCount: {
        fontSize: 12,
        width: 20,
        height: 20,
        lineHeight: 20,
        backgroundColor: '#e6e6e6',
        textAlign: 'center',
        marginRight: 10,
    },

    dishName: {
        fontSize: 14,
        fontWeight: "bold",
    },

    dishPrice: {
        marginLeft: 'auto',
    },

    dishFooter: {
        marginTop: "auto",
        marginBottom: 20,
        marginHorizontal: 15,
    },
    
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        backgroundColor: "#000",
        color: "#fff",
        padding: 18,
        width: "100%",
    },
    buttonPrice: {
        marginLeft: 50,
    }
})