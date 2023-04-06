import React from "react";
import { Pressable, StyleSheet } from "react-native";
import OpenSansText from "./OpenSansText";
import { Colors } from "../assets/Colors";

export default function Button({ title, onPress, color, padding, weight }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: color || "white",
                    padding: padding || 10,
                },
                styles.wrapperCustom,
            ]}
        >
            <OpenSansText
                style={{ color: color ? "white" : Colors.primary }}
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
        textAlign: "center",
        borderRadius: 100,
        shadowColor: "#00000024",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 20,
    },
});
