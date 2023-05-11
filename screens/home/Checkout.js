import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    Alert,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";
import { useTheme } from "@react-navigation/native";
import {
    StripeProvider,
    usePlatformPay,
    CardField,
} from "@stripe/stripe-react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { usePreventScreenCapture } from "expo-screen-capture";

export default function Checkout({ route, navigation }) {
    const item = route.params?.item || null;
    const { colors } = useTheme();
    const { isPlatformPaySupported } = usePlatformPay();
    const [cardDetails, setCardDetails] = useState(null);
    // usePreventScreenCapture();
    useEffect(() => {
        getOrientation();
        // subscribe to future changes
        const subscription = ScreenOrientation.addOrientationChangeListener(
            (evt) => {
                console.log(evt.orientationInfo.orientation);
            }
        );

        // return a clean up function to unsubscribe from notifications
        return () => {
            ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, []);
    const getOrientation = async () => {
        const res = await ScreenOrientation.getOrientationAsync();
        console.log("Current orientation:", res);
    };
    const checkGooglePay = async () => {
        if (
            !(await isPlatformPaySupported({
                googlePay: { testEnv: true },
            }))
        ) {
            Alert.alert("Google Pay is not supported.");
            return;
        }
    };

    return (
        <StripeProvider publishableKey={process.env.STRIPE_PUBLISHABLE_KEY}>
            <SafeAreaView
                style={[
                    styles.container,
                    { backgroundColor: colors.background },
                ]}
            >
                {item ? (
                    <ScrollView
                        contentContainerStyle={{ gap: 20, padding: 20 }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={{ uri: item.src }}
                                style={{
                                    width: 140,
                                    height: 140,
                                    borderRadius: 10,
                                }}
                            />
                            <View style={{ padding: 10, flex: 1 }}>
                                <OpenSansText
                                    weight="light"
                                    style={{
                                        fontSize: 24,
                                    }}
                                >
                                    {item.title}
                                </OpenSansText>

                                <OpenSansText
                                    weight="bold"
                                    color={Colors.primary}
                                    style={{ fontSize: 28 }}
                                >
                                    $ 340.00
                                </OpenSansText>
                            </View>
                        </View>
                        <View
                            style={{
                                borderTopWidth: 2,
                                borderTopColor: "lightgrey",
                                paddingTop: 40,
                                gap: 10,
                            }}
                        >
                            <OpenSansText style={{ fontSize: 18 }}>
                                Subtotal: $340.00
                            </OpenSansText>
                            <OpenSansText style={{ fontSize: 18 }}>
                                Taxes: $10.00
                            </OpenSansText>
                            <OpenSansText
                                weight="semibold"
                                style={{ fontSize: 24 }}
                            >
                                Total: $350.00
                            </OpenSansText>
                        </View>
                        <View
                            style={{
                                backgroundColor: Colors.primaryFaint,
                                padding: 10,
                                borderRadius: 10,
                            }}
                        >
                            <Button
                                title="Check if Google Pay is Supported"
                                onPress={checkGooglePay}
                            />
                        </View>
                        <View
                            style={{
                                backgroundColor: Colors.primaryFaint,
                                padding: 10,
                                borderRadius: 10,
                            }}
                        >
                            <OpenSansText style={{ fontSize: 18 }}>
                                Stripe
                            </OpenSansText>
                            <CardField
                                postalCodeEnabled={true}
                                placeholders={{
                                    number: "4242 4242 4242 4242",
                                }}
                                cardStyle={{
                                    backgroundColor: "#FFFFFF",
                                    textColor: "#000000",
                                }}
                                style={{
                                    width: "100%",
                                    height: 50,
                                    marginVertical: 30,
                                }}
                                onCardChange={(cardDetails) => {
                                    setCardDetails(cardDetails);
                                }}
                                // onFocus={(focusedField) => {
                                //     console.log("focusField", focusedField);
                                // }}
                            />
                        </View>
                        {cardDetails && (
                            <View>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Brand: {cardDetails.brand}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Complete:
                                    {cardDetails.complete ? "true" : "false"}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Expiry Month: {cardDetails.expiryMonth}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Expiry Year: {cardDetails.expiryYear}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    {cardDetails.last4
                                        ? `Last4: ************${cardDetails.last4}`
                                        : ""}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Postal Code: {cardDetails.postalCode}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Valid CVC: {cardDetails.validCVC}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Valid Expiry Date:{" "}
                                    {cardDetails.validExpiryDate}
                                </OpenSansText>
                                <OpenSansText style={{ fontSize: 18 }}>
                                    Valid Number: {cardDetails.validNumber}
                                </OpenSansText>
                            </View>
                        )}
                    </ScrollView>
                ) : (
                    <OpenSansText>No product found.</OpenSansText>
                )}
            </SafeAreaView>
        </StripeProvider>
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
