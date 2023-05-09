import React, { useState } from "react";
import {
    Image,
    Modal,
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { globalStyles } from "../../assets/globalStyles";
import { Colors } from "../../assets/Colors";

export default function BottomDrawerPage() {
    // We need to get the height of the phone and use it relatively,
    // This is because height of phones vary
    const windowHeight = Dimensions.get("window").height;

    // This state would determine if the drawer sheet is visible or not
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    // Function to open the bottom sheet
    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Great wizard",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Mischevious halfling",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Wandering bard",
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={globalStyles.container}>
                <Button
                    title="Open Drawer"
                    color={Colors.primaryLight}
                    style={{ width: 240 }}
                    onPress={handleOpenBottomSheet}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isBottomSheetOpen}
                onRequestClose={handleCloseBottomSheet}
            >
                <SafeAreaView
                    style={[
                        styles.bottomSheet,
                        { height: windowHeight * 0.6 },
                        globalStyles.upperShadow,
                    ]}
                >
                    <OpenSansText style={{ fontSize: 24 }}>
                        Select a title
                    </OpenSansText>
                    <FlatList
                        data={DATA}
                        contentContainerStyle={{ gap: 10, padding: 20 }}
                        renderItem={({ item }) => (
                            <Button
                                title={item.title}
                                onPress={handleCloseBottomSheet}
                                color="#da2580"
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                    <Button
                        title="Close"
                        style={{ width: 240 }}
                        onPress={handleCloseBottomSheet}
                    />
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 20,
        // justifyContent: "center",
    },
    bottomSheet: {
        position: "absolute",
        left: 0,
        right: 0,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
    },
});
