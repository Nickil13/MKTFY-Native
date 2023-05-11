import React from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import Navbar from "../../components/Navbar";
import OpenSansText from "../../components/OpenSansText";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";
import { useTheme } from "@react-navigation/native";
import { globalStyles } from "../../assets/globalStyles";
import PlusIcon from "../../assets/svg/PlusIcon";
import Card from "../../components/Card";
import { cards } from "../../utils/dummyData";

export default function Dashboard({ navigation }) {
    const [count, setCount] = React.useState(0);
    const { colors } = useTheme();
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
        <SafeAreaView
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            <Navbar openMenu={() => navigation.navigate("My Modal")} />
            <View style={[{ padding: 20, gap: 10 }, globalStyles.shadow]}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <OpenSansText>Browse Categories</OpenSansText>
                    <OpenSansText color={Colors.primary}>
                        v Calgary
                    </OpenSansText>
                </View>
                <OpenSansText>A list of all the categories...</OpenSansText>
            </View>
            <View>
                <Button
                    title="Go to React Native Elements"
                    onPress={() => navigation.navigate("React Native Elements")}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    padding: 20,
                    gap: 30,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <OpenSansText>Deals for you</OpenSansText>
                    <OpenSansText>Calgary</OpenSansText>
                </View>
                <FlatList
                    data={cards}
                    style={{
                        gap: 10,
                    }}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <Card
                            title={item.title}
                            src={item.src}
                            index={index}
                            onPress={() =>
                                navigation.navigate("Product", { item })
                            }
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10 }}></View>
                    )}
                />
            </View>
            <View
                style={{
                    position: "absolute",
                    right: "50%",
                    bottom: 40,
                    left: 0,
                    right: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "box-none",
                }}
            >
                <Button
                    color={Colors.primary}
                    style={{ maxWidth: 200 }}
                    padding={16}
                    onPress={() => navigation.navigate("Create Listing")}
                    title="Create Listing"
                    icon={<PlusIcon size={24} color="#fff" />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
    link: {
        color: Colors.secondary,
        fontSize: 14,
        alignSelf: "flex-end",
        textDecorationLine: "underline",
    },
});
