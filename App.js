import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/auth/Login";
import Dashboard from "./screens/home/Dashboard";
import { StatusBar } from "expo-status-bar";
import ForgotPassword from "./screens/auth/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="Forgot Password">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                    // options={{ title: "Welcome" }}
                />
                <Stack.Screen
                    name="Forgot Password"
                    component={ForgotPassword}
                    options={
                        {
                            // headerShown: false,
                        }
                    }
                    // options={{ title: "Welcome" }}
                />
                <Stack.Screen name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
