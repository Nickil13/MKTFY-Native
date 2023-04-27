import React from "react";
import OpenSansText from "../components/OpenSansText";
import { TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../assets/Colors";
import { useFonts } from "expo-font";
import { useTheme } from "@react-navigation/native";

export default function InputField({
    onChangeText,
    value,
    placeholder,
    label,
    type,
    numberOfLines,
}) {
    const { colors } = useTheme();
    const [loaded] = useFonts({
        "opensans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.inputControl}>
            <OpenSansText style={{ color: colors.text }} weight="medium">
                {label}
            </OpenSansText>
            <TextInput
                style={[
                    styles.input,
                    { textAlignVertical: numberOfLines ? "top" : "auto" },
                ]}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={type === "password"}
                placeholder={placeholder}
                placeholderTextColor={Colors.gray200}
                numberOfLines={numberOfLines}
                multiline={numberOfLines && numberOfLines > 0}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputControl: { display: "flex", gap: 10, width: "100%" },
    input: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 4,
        borderColor: Colors.gray100,
        color: Colors.offBlack,
        fontFamily: "opensans-regular",
        backgroundColor: "white",
        fontSize: 15,
    },
    label: {},
});
