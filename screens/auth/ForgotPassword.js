import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import OpenSansText from "../../components/OpenSansText";
import { Colors } from "../../assets/Colors";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { globalStyles, images } from "../../assets/globalStyles";

export default function ForgotPassword() {
    const [email, onEmailChange] = useState("");
    return (
        <View style={globalStyles.container}>
            <View style={styles.container}>
                <Image
                    source={images.login.emailIcon}
                    style={{ height: 132, width: 132 }}
                />
                <OpenSansText style={{ color: Colors.offBlackDark }}>
                    Please enter your email so that we can send you a
                    verification code to reset your password.
                </OpenSansText>
                <InputField
                    label="Email"
                    onChange={onEmailChange}
                    value={email}
                    placeholder="test@info.com"
                />
                <Button title="Send" color={Colors.primary} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 42,
        gap: 32,
        marginHorizontal: "auto",
    },
});
