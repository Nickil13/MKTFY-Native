import React from "react";
import { Path, Svg } from "react-native-svg";

const DownArrowIcon = ({ color, size }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 8.737 4.956">
            <Path
                id="Icon-caret-down"
                d="M1.382,13.5H8.944a.587.587,0,0,1,.414,1L5.579,18.284a.589.589,0,0,1-.832,0L.968,14.5A.587.587,0,0,1,1.382,13.5Z"
                transform="translate(-0.794 -13.5)"
                fill="#6318af"
            />
        </Svg>
    );
};

export default DownArrowIcon;
