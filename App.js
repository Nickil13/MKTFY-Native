import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Image,
    View,
    ImageBackground,
    SafeAreaView,
    TextInput,
} from "react-native";
import OpenSansText from "./components/OpenSansText";
import InputField from "./components/InputField";

export default function App() {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("./assets/images/img_background_clouds_footer.png")}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    ...styles.container,
                }}
            >
                <Image
                    style={{ width: 235, height: 89 }}
                    source={require("./assets/images/logo.png")}
                />

                <View>
                    <InputField
                        label="Email"
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="email@info.com"
                    />
                    <InputField
                        label="Password"
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="password"
                    />
                </View>
                <StatusBar style="auto" />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
});
