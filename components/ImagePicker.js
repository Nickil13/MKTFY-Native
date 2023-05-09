import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import OpenSansText from "./OpenSansText";

export default function ImagePickerExample({ images, setImages, children }) {
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsMultipleSelection: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImages([...images, ...result.assets]);
        }
    };

    const handleRemoveImage = (index) => {
        const list = [...images];
        list.pop(index);
        setImages(list);
    };

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <View
                style={{
                    width: "100%",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    gap: 10,
                }}
            >
                {images?.length > 0 &&
                    images.map((image, index) => {
                        return (
                            <Pressable
                                onPress={pickImage}
                                style={{ position: "relative", width: "48%" }}
                                key={index}
                            >
                                <Image
                                    source={{ uri: image.uri }}
                                    style={{ width: "100%", height: 200 }}
                                    resizeMode="cover"
                                />
                                <Pressable
                                    style={{
                                        position: "absolute",
                                        top: 6,
                                        right: 6,
                                        backgroundColor: "white",
                                        width: 30,
                                        height: 30,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 100,
                                    }}
                                    onPress={() => handleRemoveImage(index)}
                                >
                                    <OpenSansText>x</OpenSansText>
                                </Pressable>
                            </Pressable>
                        );
                    })}
                <Pressable
                    onPress={pickImage}
                    style={{ width: images?.length > 0 ? "48%" : "100%" }}
                >
                    {children}
                </Pressable>
            </View>
        </View>
    );
}
