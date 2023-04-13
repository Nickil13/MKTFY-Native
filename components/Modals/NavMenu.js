import React from "react";
import { Pressable, View, StyleSheet, SectionList } from "react-native";
import OpenSansText from "../OpenSansText";
import { Colors } from "../../assets/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../assets/globalStyles";

const links = [
    {
        title: "Settings",
        data: [
            "Account Information",
            "Change Password",
            "My Purchases",
            "My Listings",
            "My Notifications",
        ],
    },
    { title: "Help", data: ["FAQ", "Contact Us"] },
];
export default function NavMenu({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bgBeige }}>
            <View style={styles.menuHeader}>
                <View style={[styles.badge, globalStyles.shadow]}>
                    <OpenSansText
                        weight="bold"
                        color="white"
                        style={{
                            fontSize: 30,
                        }}
                    >
                        N
                    </OpenSansText>
                </View>
                <OpenSansText
                    weight="bold"
                    style={{
                        fontSize: 24,
                        color: "black",
                    }}
                >
                    Nicki L
                </OpenSansText>
            </View>
            <View style={{ padding: 20 }}>
                <SectionList
                    sections={links}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginVertical: 6 }}>
                                <OpenSansText color="black">
                                    {item}
                                </OpenSansText>
                            </View>
                        );
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <OpenSansText weight="semibold" color="black">
                            {title}
                        </OpenSansText>
                    )}
                    SectionSeparatorComponent={() => (
                        <View style={{ height: 10 }}></View>
                    )}
                    keyExtractor={(index) => index}
                />
            </View>

            <Pressable
                style={{ position: "absolute", top: 20, right: 20 }}
                onPress={() => navigation.goBack()}
            >
                <OpenSansText>x</OpenSansText>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    badge: {
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        borderRadius: 100,
        flexShrink: 0,
        // aspectRatio: 1,
        backgroundColor: Colors.primary,
    },
    menuHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.gray50,
        backgroundColor: "white",
        marginTop: 60,
    },
});
