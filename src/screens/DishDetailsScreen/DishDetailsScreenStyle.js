import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
    },

    dishHeader: {
        margin: 15,
        paddingVertical: 30,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },

    name: {
        fontSize: 26,
        fontWeight: "bold",
        paddingTop: 20,
    },

    description: {
        fontSize: 16,
        color: "#cccccc",
        paddingTop: 8,
    },

    dishCount: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        zIndex: 1000
    },

    countNumber: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10,
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