import React, { useState } from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
} from "react-native";
import OpenSansText from "../../components/OpenSansText";
import Button from "../../components/Button";
import { Colors } from "../../assets/Colors";
import { useTheme } from "@react-navigation/native";
import InputField from "../../components/InputField";
import InputSelect from "../../components/InputSelect";
import ImagePickerExample from "../../components/ImagePicker";

const categories = [
    "Cars & Vehicles",
    "Furniture",
    "Electronics",
    "Real Estate",
];
export default function CreateListing({ route, navigation }) {
    const { colors } = useTheme();
    const [category, setCategory] = useState(null);

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            <ScrollView>
                <View
                    style={{
                        margin: 20,
                        borderWidth: 1,
                        borderRadius: 4,
                        borderColor: Colors.primary,
                    }}
                >
                    <ImagePickerExample>
                        <View
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 40,
                                gap: 10,
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={require("../../assets/images/icon_camera.png")}
                                style={{ width: 40, height: 40 }}
                            />
                            <OpenSansText color={Colors.primary}>
                                Choose up to 3 photos
                            </OpenSansText>
                        </View>
                    </ImagePickerExample>
                </View>
                <View style={{ padding: 20, gap: 16 }}>
                    <InputField
                        label="Product Name"
                        // onChangeText={onChangeEmail}
                        // value={email}
                        placeholder="Product name"
                    />
                    <InputField
                        label="Description"
                        // onChangeText={onChangeEmail}
                        // value={email}
                        placeholder="A description of your product"
                        numberOfLines={5}
                    />

                    <InputSelect
                        label="Category"
                        placeholdertext="Select a category"
                        value={category}
                        setValue={setCategory}
                        options={categories}
                    />

                    <InputSelect
                        label="Condition"
                        placeholdertext="Select a condition"
                        // value={category}
                        // setValue={setCategory}
                        options={["New", "Used"]}
                    />

                    <InputField
                        label="Price"
                        // onChangeText={onChangeEmail}
                        // value={email}
                        placeholder="Type the price"
                    />
                    <InputField
                        label="Address"
                        // onChangeText={onChangeEmail}
                        // value={email}
                        placeholder="Address"
                    />
                    <InputSelect
                        label="City"
                        placeholdertext="Select a city"
                        // value={category}
                        // setValue={setCategory}
                        options={["Calgary", "Brooks"]}
                    />
                    <Button color={Colors.primary} title="Post your listing" />
                    <Button title="Cancel" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    badge: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        borderRadius: 100,
        flexShrink: 0,
        // aspectRatio: 1,
        backgroundColor: Colors.primary,
    },
});
