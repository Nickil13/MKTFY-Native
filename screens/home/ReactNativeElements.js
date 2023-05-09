import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import { Colors } from "../../assets/Colors";
import { Avatar, CheckBox, FAB, Image, SearchBar } from "@rneui/themed";

const avatarImg = {
    uri: "https://images.unsplash.com/photo-1682997843681-4a0d07fa9633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
};

const testImg = {
    uri: "https://images.unsplash.com/photo-1682834818789-fdd3fd6c93fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
};
export default function ReactNativeElements({ navigation }) {
    const [visible, setVisible] = useState(true);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    width: "100%",
                }}
            >
                <Avatar
                    size={32}
                    rounded
                    title="NL"
                    containerStyle={{
                        backgroundColor: "purple",
                        alignSelf: "flex-end",
                        marginRight: 20,
                    }}
                />
            </View>
            <Avatar size={200} rounded source={avatarImg}>
                <Avatar.Accessory
                    size={48}
                    icon={{ name: "pencil", type: "font-awesome" }}
                    rounded
                    style={{ backgroundColor: "#6733b9" }}
                />
            </Avatar>
            <View style={{ width: "100%", padding: 20 }}>
                <CheckBox title="Receive Notifications" />
                <SearchBar
                    placeholder="Look for posts"
                    onChangeText={updateSearch}
                    value={search}
                />
                <View
                    style={{
                        width: "100%",
                        height: 200,
                    }}
                >
                    <Image
                        source={testImg}
                        containerStyle={{
                            aspectRatio: 1,
                            width: "100%",
                            flex: 1,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
            </View>
            <FAB
                visible={visible}
                title="Navigate"
                upperCase
                icon={{ name: "place", color: "white" }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 20,
        // justifyContent: "center",
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
    link: {
        color: Colors.secondary,
        fontSize: 14,
        alignSelf: "flex-end",
        textDecorationLine: "underline",
    },
});
