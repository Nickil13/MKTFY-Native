import React from "react";
import { Path, Svg } from "react-native-svg";

const PlusIcon = ({ color, size }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24">
            <Path
                id="Path_16"
                data-name="Path 16"
                d="M0,0H24V24H0Z"
                fill="none"
            />

            <Path
                id="Path_17"
                data-name="Path 17"
                d="M13,7H11v4H7v2h4v4h2V13h4V11H13ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.011,8.011,0,0,1,12,20Z"
                fill={color}
            />
        </Svg>
    );
};

export default PlusIcon;
