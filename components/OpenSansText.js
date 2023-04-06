import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function OpenSansText({ children, weight }) {
    const [loaded] = useFonts({
        "opensans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
        "opensans-medium": require("../assets/fonts/OpenSans-Medium.ttf"),
        "opensans-semibold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
        "opensans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    });

    function getWeight() {
        switch (weight) {
            case "bold":
                return "opensans-bold";
            case "semibold":
                return "opensans-semibold";
            case "medium":
                return "opensans-medium";
            default:
                return "opensans-regular";
        }
    }

    if (!loaded) {
        return null;
    }
    return <Text style={{ fontFamily: getWeight() }}>{children}</Text>;
}
