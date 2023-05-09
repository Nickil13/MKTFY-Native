import React, { useEffect } from "react";
import { Alert, View } from "react-native";
import OpenSansText from "../../components/OpenSansText";
import { globalStyles } from "../../assets/globalStyles";
import * as LocalAuthentication from "expo-local-authentication";
import Button from "../../components/Button";

export default function Signup() {
    const [isBiometricSupported, setIsBiometricSupported] =
        React.useState(false);

    // Check if hardware supports biometrics
    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    }, []);

    const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics) {
            Alert.alert(
                "Fingerprint login",
                "You do not have any biometrics saved on your device.",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ]
            );
        } else {
            const biometricAuth = await LocalAuthentication.authenticateAsync();
            console.log(biometricAuth);
        }
    };
    return (
        <View style={globalStyles.container}>
            <OpenSansText>
                Biometrics:{" "}
                {isBiometricSupported
                    ? "Your device is compatible with Biometrics"
                    : "Face or Fingerprint scanner is unavailable on this device"}
            </OpenSansText>
            <Button
                title="Login with Fingerprint"
                onPress={handleBiometricAuth}
            />
        </View>
    );
}
