import React from "react";
import { Pressable, StyleSheet } from "react-native";
import OpenSansText from "./OpenSansText";
import { Colors } from "../assets/Colors";
import { useTheme } from "@react-navigation/native";
import { globalStyles } from "../assets/globalStyles";

export default function Button({
    title,
    onPress,
    color,
    padding,
    weight,
    style,
    icon,
}) {
    const { colors } = useTheme();
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: color || colors.background,
                    padding: padding || 12,
                },
                styles.wrapperCustom,
                globalStyles.shadow,
                style,
            ]}
        >
            {icon && icon}
            <OpenSansText
                style={{
                    color: color ? "white" : colors.primary,
                    textAlign: "center",
                    marginLeft: 4,
                }}
                weight={weight || "medium"}
            >
                {title}
            </OpenSansText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 8,
        borderRadius: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
});
