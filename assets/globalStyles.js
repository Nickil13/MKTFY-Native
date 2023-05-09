import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#00000024",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 20,
    },
    upperShadow: {
        backgroundColor: "white",
        borderTopEndRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20,
    },
    container: {
        padding: 20,
        flex: 1,
        gap: 20,
    },
});

export const images = {
    login: {
        emailIcon: require("./images/icon_email.png"),
    },
    product: {
        tagIcon: require("./images/icon_tag.png"),
    },
};
