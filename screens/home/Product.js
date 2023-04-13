import React from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";
import { useTheme } from "@react-navigation/native";
import { images } from "../../assets/globalStyles";

export default function Product({ route, navigation }) {
    const item = route.params?.item || null;
    const { colors } = useTheme();
    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            {item ? (
                <ScrollView>
                    <Image
                        source={{ uri: item.src }}
                        style={{ width: "100%", height: 300 }}
                    />
                    <View
                        style={{
                            padding: 20,
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            backgroundColor: Colors.bgBeigeDark,
                            gap: 10,
                            paddingBottom: 40,
                        }}
                    >
                        <OpenSansText weight="light" style={{ fontSize: 24 }}>
                            {item.title}
                        </OpenSansText>
                        <OpenSansText
                            weight="bold"
                            color={Colors.primary}
                            style={{ fontSize: 36 }}
                        >
                            $ 340.00
                        </OpenSansText>
                        <Button title="I want this!" color={Colors.primary} />
                    </View>
                    <View style={{ padding: 20, gap: 10 }}>
                        <OpenSansText weight="semibold" color={Colors.primary}>
                            Details
                        </OpenSansText>
                        <OpenSansText>
                            The world's most beautiful flower. Silk smooth, and
                            pure like the first snowflake of Winter.
                        </OpenSansText>
                        <View
                            style={{
                                backgroundColor: Colors.primaryFaint,
                                marginRight: "auto",
                                paddingVertical: 4,
                                paddingHorizontal: 6,
                                borderRadius: 8,
                            }}
                        >
                            <OpenSansText color={Colors.primary}>
                                NEW
                            </OpenSansText>
                        </View>
                    </View>
                    <View
                        style={{
                            padding: 20,
                            gap: 10,
                            borderTopWidth: 1,
                            borderColor: Colors.gray50,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <View style={styles.badge}>
                            <OpenSansText color="white" weight="bold">
                                N
                            </OpenSansText>
                        </View>
                        <View>
                            <OpenSansText weight="bold">Nicki L</OpenSansText>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    source={images.product.tagIcon}
                                    style={{ width: 20, height: 20 }}
                                />
                                <OpenSansText>
                                    <OpenSansText weight="bold">2</OpenSansText>{" "}
                                    Listings
                                </OpenSansText>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            ) : (
                <OpenSansText>No product found.</OpenSansText>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    badge: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        borderRadius: 100,
        flexShrink: 0,
        // aspectRatio: 1,
        backgroundColor: Colors.primary,
    },
});
