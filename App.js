import RootStack from "./navigation/RootStack";
import { ThemeProvider, Button, createTheme } from "@rneui/themed";

const theme = createTheme({
    components: {},
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <RootStack />
        </ThemeProvider>
    );
}
