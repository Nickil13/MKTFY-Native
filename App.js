import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./navigation/RootStack";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import * as Linking from "expo-linking";
const theme = createTheme({
    components: {},
});

const prefix = Linking.createURL("/");

export default function App() {
    const linking = {
        prefixes: [prefix],
    };
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <SafeAreaProvider>
                        <RootStack />
                    </SafeAreaProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}
