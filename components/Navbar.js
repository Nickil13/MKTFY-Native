import React from "react";
import OpenSansText from "./OpenSansText";
import { Pressable, View } from "react-native";
import { Colors } from "../assets/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Navbar({ openMenu }) {
    return (
        <View
            style={{
                backgroundColor: Colors.primary,
                paddingTop: 40,
                padding: 20,
            }}
        >
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
                    <MaterialIcons name="menu" size={24} color="black" />
                </Pressable>
                <OpenSansText>Search on MKTFY</OpenSansText>
            </View>
        </View>
    );
}
