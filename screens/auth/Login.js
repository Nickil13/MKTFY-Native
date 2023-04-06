import { useState } from "react";
import {
    StyleSheet,
    Image,
    View,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";

export default function Login({ navigation }) {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../assets/images/img_background_clouds_footer.png")}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    ...styles.container,
                    gap: 40,
                }}
            >
                <Image
                    style={{ width: 235, height: 89 }}
                    source={require("../../assets/images/logo.png")}
                />

                <View style={{ width: "90%", display: "flex", gap: 10 }}>
                    <InputField
                        label="Email"
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="email@info.com"
                    />
                    <InputField
                        label="Password"
                        type="password"
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="password"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Forgot Password")}
                    >
                        <OpenSansText style={styles.link}>
                            I forgot my password
                        </OpenSansText>
                    </TouchableOpacity>

                    <View style={{ display: "flex", gap: 10 }}>
                        <Button
                            title="Login"
                            color={Colors.secondary}
                            padding={20}
                            weight="semibold"
                            onPress={() => {
                                navigation.navigate("Dashboard");
                            }}
                        />
                        <Button title="New in the app? Create an account!" />
                    </View>
                </View>
            </ImageBackground>
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
        alignSelf: "end",
        textDecorationLine: "underline",
    },
});
