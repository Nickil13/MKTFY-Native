import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import ForgotPassword from "../screens/auth/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Create Account" component={Signup} />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        </Stack.Navigator>
    );
}
