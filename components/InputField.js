import React from "react";
import OpenSansText from "../components/OpenSansText";
import { TextInput, View, StyleSheet } from "react-native";

export default function InputField({
    onChangeText,
    value,
    placeholder,
    label,
}) {
    return (
        <View>
            <OpenSansText style={styles.label}>{label}</OpenSansText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: { height: 40, borderWidth: 1, padding: 10 },
    label: { paddingBottom: 4 },
});
