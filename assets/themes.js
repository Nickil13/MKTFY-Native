import { Colors } from "./Colors";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const MyDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: Colors.primary,
        background: Colors.offBlackDark,
    },
};
export const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        primary: Colors.primary,
        accent: Colors.secondary,
        background: "white",
        card: "rgb(255, 255, 255)",
        text: Colors.offBlack,
        border: "rgb(199, 199, 204)",
        notification: "rgb(255, 69, 58)",
    },
};
