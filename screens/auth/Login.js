import { useState } from "react";
import {
    StyleSheet,
    Platform,
    Image,
    View,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";
import { useTheme } from "@react-navigation/native";

export default function Login({ navigation }) {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (Platform.OS !== "web") {
                    Keyboard.dismiss();
                }
            }}
        >
            <SafeAreaView
                style={[
                    styles.container,
                    { backgroundColor: colors.background },
                ]}
            >
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
                    <View
                        style={{
                            width: "90%",
                            flexGrow: 1,
                            paddingTop: 160,
                            alignItems: "center",
                            paddingBottom: 20,
                            gap: 30,
                        }}
                    >
                        <Image
                            style={{ width: 235, height: 89 }}
                            source={require("../../assets/images/logo.png")}
                        />
                        <View
                            style={{
                                gap: 10,
                                width: "100%",
                            }}
                        >
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
                                placeholder="Insert your password"
                            />
                            <TouchableOpacity
                                style={{ alignSelf: "flex-end" }}
                                onPress={() =>
                                    navigation.navigate("Forgot Password")
                                }
                            >
                                <OpenSansText style={styles.link}>
                                    I forgot my password
                                </OpenSansText>
                            </TouchableOpacity>
                        </View>
                        <Button
                            title="Login"
                            color={Colors.secondary}
                            padding={20}
                            weight="semibold"
                            onPress={() => {
                                // log in
                            }}
                        />
                        <View
                            style={{
                                position: "absolute",
                                bottom: 10,
                                width: "100%",
                            }}
                        >
                            <Button title="New in the app? Create an account!" />
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
    link: {
        color: Colors.secondary,
        fontSize: 14,
        alignSelf: "flex-end",
        textDecorationLine: "underline",
    },
});
