import React from "react";
import OpenSansText from "./OpenSansText";
import { Pressable, View } from "react-native";
import { Colors } from "../assets/Colors";

export default function Navbar({ openMenu }) {
    return (
        <View style={{ backgroundColor: Colors.primary, padding: 20 }}>
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: "row",
                    gap: 10,
                    padding: 20,
                    borderRadius: 10,
                }}
            >
                <Pressable onPress={openMenu}>
                    <OpenSansText>|||</OpenSansText>
                </Pressable>
                <OpenSansText>Search on MKTFY</OpenSansText>
            </View>
        </View>
    );
}
