import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { useColorScheme } from "react-native";
import { MyDarkTheme, MyTheme } from "../assets/themes";
import { useSelector } from "react-redux";

export default function RootStack() {
    const { isLoggedIn } = useSelector((state) => state.user);
    const scheme = useColorScheme();
    return (
        <NavigationContainer theme={scheme === "dark" ? MyDarkTheme : MyTheme}>
            <StatusBar style="auto" />
            {isLoggedIn ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    );
}
