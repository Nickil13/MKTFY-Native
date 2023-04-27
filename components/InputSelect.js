import React, { useState } from "react";
import { Colors } from "../assets/Colors";
import { View, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import DownArrowIcon from "../assets/svg/DownArrowIcon";
import { useFonts } from "expo-font";
import { useTheme } from "@react-navigation/native";
import OpenSansText from "./OpenSansText";

export default function InputSelect({
    options,
    label,
    value,
    setValue,
    placeholdertext,
}) {
    const { colors } = useTheme();
    const [loaded] = useFonts({
        "opensans-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.inputControl}>
            <OpenSansText style={{ color: colors.text }} weight="medium">
                {label}
            </OpenSansText>
            <SelectDropdown
                data={options}
                defaultButtonText={placeholdertext}
                buttonStyle={{
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: Colors.gray100,
                    backgroundColor: "white",
                    width: "100%",
                    paddingHorizontal: 15,
                }}
                buttonTextStyle={{
                    textAlign: "left",
                    fontSize: 15,
                    marginHorizontal: 0,
                    fontFamily: "opensans-regular",
                    color: value ? Colors.offBlack : Colors.gray200,
                }}
                searchPlaceholderColor={Colors.gray200}
                renderDropdownIcon={() => <DownArrowIcon size={10} />}
                onSelect={(selectedItem, index) => {
                    setValue(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputControl: { display: "flex", gap: 10, width: "100%" },
});
