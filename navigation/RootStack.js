import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

export default function RootStack() {
    const isLoggedIn = true;
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            {isLoggedIn ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    );
}
