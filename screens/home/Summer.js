import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar";
import OpenSansText from "../../components/OpenSansText";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";

export default function Summer({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <OpenSansText>Hello Summer</OpenSansText>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
    link: {
        color: Colors.secondary,
        fontSize: 14,
        alignSelf: "end",
        textDecorationLine: "underline",
    },
});
