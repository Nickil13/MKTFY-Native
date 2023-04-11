import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/home/Dashboard";
import { Button, Image } from "react-native";
import Product from "../screens/home/Product";
import MyTabs from "./MyTabs";

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/images/icon_email.png")}
        />
    );
}

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={MyTabs}
                options={{
                    headerBackImageSource: require("../assets/images/icon_back.png"),
                    headerTitle: (props) => <LogoTitle {...props} />,
                    // headerRight: () => (
                    //     <Button
                    //         onPress={() => alert("This is a button!")}
                    //         title="Info"
                    //         color="blue"
                    //     />
                    // ),
                }}
            />
            <Stack.Screen
                name="Product"
                component={Product}
                options={{
                    headerBackImageSource: require("../assets/images/icon_back.png"),
                    // headerTitle: (props) => <LogoTitle {...props} />,
                    // headerRight: () => (
                    //     <Button
                    //         onPress={() => alert("This is a button!")}
                    //         title="Info"
                    //         color="blue"
                    //     />
                    // ),
                }}
            />
        </Stack.Navigator>
    );
}
