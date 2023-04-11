import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Summer from "../screens/home/Summer";
import Winter from "../screens/home/Winter";
import { Button, View, Text } from "react-native";

const Tab = createBottomTabNavigator();

function ModalScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}
export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Group>
                <Tab.Screen
                    name="Summer"
                    component={Summer}
                    options={{
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Winter"
                    component={Winter}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Group>
            <Tab.Group screenOptions={{ presentation: "modal" }}>
                <Tab.Screen name="My Modal" component={ModalScreen} />
            </Tab.Group>
        </Tab.Navigator>
    );
}
