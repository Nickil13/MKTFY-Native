import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar";
import OpenSansText from "../../components/OpenSansText";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";

export default function Dashboard({ navigation }) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handlder to update the count
        // navigation.setOptions({
        //     headerRight: () => (
        //         <Button
        //             onPress={() => setCount((c) => c + 1)}
        //             title="Update count"
        //         />
        //     ),
        // });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <OpenSansText>{count}</OpenSansText>
            <Button
                title="Go to product"
                onPress={() => navigation.navigate("Product")}
            />
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
        alignSelf: "flex-end",
        textDecorationLine: "underline",
    },
});
