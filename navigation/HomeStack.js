import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/home/Dashboard";
import Product from "../screens/home/Product";
import NavMenu from "../components/Modals/NavMenu";
import CreateListing from "../screens/home/CreateListing";
import ReactNativeElements from "../screens/home/ReactNativeElements";
import BottomDrawerPage from "../screens/home/BottomDrawerPage";
import Checkout from "../screens/home/Checkout";
import Pedometer from "../screens/home/Pedometer";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
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
                name="Checkout"
                component={Checkout}
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
            <Stack.Screen
                name="React Native Elements"
                component={ReactNativeElements}
                options={{
                    headerBackImageSource: require("../assets/images/icon_back.png"),
                }}
            />
            <Stack.Screen
                name="Bottom Drawer Page"
                component={BottomDrawerPage}
                options={{
                    headerBackImageSource: require("../assets/images/icon_back.png"),
                }}
            />
            <Stack.Screen
                name="Pedometer"
                component={Pedometer}
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
