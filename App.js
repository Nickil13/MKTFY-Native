import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./navigation/RootStack";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
const theme = createTheme({
    components: {},
});

export default function App() {
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
