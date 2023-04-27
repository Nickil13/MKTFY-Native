import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import OpenSansText from "./OpenSansText";
import { Colors } from "../assets/Colors";
import { globalStyles } from "../assets/globalStyles";

const Card = ({ title, src, index, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View
                style={[
                    {
                        width: "45%",
                        borderRadius: 10,
                        overflow: "hidden",
                        elevation: 8,
                        marginRight: index % 2 !== 0 ? 0 : 10,
                    },
                    globalStyles.shadow,
                ]}
            >
                <View
                    style={{
                        height: 140,
                    }}
                >
                    <Image
                        source={{ uri: src }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{ padding: 10, gap: 10, backgroundColor: "white" }}
                >
                    <OpenSansText>{title}</OpenSansText>
                    <OpenSansText color={Colors.primary} weight="bold">
                        $ 169.88
                    </OpenSansText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Card;
