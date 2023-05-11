import React, { useState, useEffect } from "react";
import { View } from "react-native";
import OpenSansText from "../../components/OpenSansText";
import { Pedometer } from "expo-sensors";
import { Colors } from "../../assets/Colors";

export default function PedometerPage() {
    const [isPedometerAvailable, setIsPedometerAvailable] =
        useState("checking");
    const [currentStepCount, setCurrentStepCount] = useState(0);

    const subscribe = async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(String(isAvailable));

        if (isAvailable) {
            return Pedometer.watchStepCount((result) => {
                setCurrentStepCount(result.steps);
            });
        }
    };

    useEffect(() => {
        const subscription = subscribe();

        // Some error here on hot reload
        return () => subscription && subscription.remove();
    }, []);
    return (
        <View style={{ padding: 20 }}>
            <OpenSansText>
                Pedometer Available: {isPedometerAvailable}
            </OpenSansText>
            <View>
                <OpenSansText>Walk! And watch this go up:</OpenSansText>
                <OpenSansText
                    color={Colors.primary}
                    weight="bold"
                    style={{ fontSize: 30 }}
                >
                    {currentStepCount}
                </OpenSansText>
            </View>
        </View>
    );
}
