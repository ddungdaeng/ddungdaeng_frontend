import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import colors from "../../styles/colors";

interface CustomTextProps extends TextProps {
  w?: "regular" | "bold" | "semibold" | "medium";
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  w = "regular",
  ...props
}) => {
  const getFontFamily = () => {
    switch (w) {
      case "medium":
        return "Pretendard-Medium";
      case "bold":
        return "Pretendard-Bold";
      case "semibold":
        return "Pretendard-Bold";
      default:
        return "Pretendard-Regular";
    }
  };

  return (
    <Text
      style={[styles.defaultText, { fontFamily: getFontFamily() }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: colors.black, // 기본 글씨색
  },
});

export default CustomText;
