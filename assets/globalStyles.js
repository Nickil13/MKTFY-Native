import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#00000024",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 20,
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
