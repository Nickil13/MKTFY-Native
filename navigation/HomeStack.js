import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/home/Dashboard";
import Product from "../screens/home/Product";
import NavMenu from "../components/Modals/NavMenu";
import CreateListing from "../screens/home/CreateListing";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Create Listing">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Product"
                component={Product}
                options={{
                    headerBackImageSource: require("../assets/images/icon_back.png"),
                }}
            />
            <Stack.Screen
                name="Create Listing"
                component={CreateListing}
                options={{
                    headerBackImageSource: require("../assets/images/icon_back.png"),
                }}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                    name="My Modal"
                    component={NavMenu}
                    options={{ headerShown: false }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}
