import React, { useState, useRef } from "react";
import {
    Image,
    Modal,
    View,
    StyleSheet,
    Dimensions,
    ToastAndroid,
    FlatList,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { globalStyles } from "../../assets/globalStyles";
import { Colors } from "../../assets/Colors";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

const testImage = {
    uri: "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
};
export default function BottomDrawerPage() {
    const imageRef = useRef();
    const [status, requestPermission] = MediaLibrary.usePermissions();
    if (status === null) {
        requestPermission();
    }
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

    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 360,
                quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                alert("Saved!");
            }
        } catch (e) {
            console.error(e);
        }
    };

    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={globalStyles.container}>
                <Button
                    title="Open Drawer"
                    color={Colors.primaryLight}
                    style={{ width: 240 }}
                    onPress={handleOpenBottomSheet}
                />
                <View
                    ref={imageRef}
                    collapsable={false}
                    style={{
                        borderWidth: 2,
                        alignItems: "center",
                        borderColor: "lightgrey",
                        padding: 10,
                        height: 360,
                        width: 300,
                    }}
                >
                    <Image
                        source={testImage}
                        style={{ width: "100%", height: "100%" }}
                        esizeMode="cover"
                    />
                </View>
                <Button
                    title="Take Screenshot of Area"
                    color={Colors.primary}
                    style={{ width: 240 }}
                    onPress={onSaveImageAsync}
                />
                <Button
                    title="Try a Toast"
                    color={Colors.primaryLight}
                    style={{ width: 240 }}
                    onPress={() => showToast("Here's a toast!")}
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
