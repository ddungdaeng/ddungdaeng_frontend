import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import colors from "../../styles/colors";

//fix: 나중에 다 수정하고 variant -> ? 없애기
interface CustomTextProps extends TextProps {
  w?: "regular" | "bold" | "semibold" | "medium";
  variant?: "title1" | "title2" | "sub1" | "sub2" | "sub3" | "body1" | "body2";
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  w = "regular",
  variant,
  ...props
}) => {
  const getFontFamily = () => {
    switch (w) {
      case "medium":
        return "Pretendard-Medium";
      case "bold":
        return "Pretendard-Bold";
      case "semibold":
        return "Pretendard-SemiBold";
      default:
        return "Pretendard-Regular";
    }
  };

  const getVariantStyle = () => {
    switch (variant) {
      case "title1":
        return [styles.title1, { fontFamily: "Pretendard-Bold" }];
      case "title2":
        return [styles.title2, { fontFamily: "Pretendard-Bold" }];
      case "sub1":
        return [styles.sub1, { fontFamily: "Pretendard-SemiBold" }];
      case "sub2":
        return [styles.sub2, { fontFamily: "Pretendard-SemiBold" }];
      case "sub3":
        return [styles.sub3, { fontFamily: "Pretendard-Medium" }];
      case "body1":
        return [styles.body1, { fontFamily: "Pretendard-Regular" }];
      case "body2":
        return [styles.body2, { fontFamily: "Pretendard-Regular" }];
      default:
        return { fontFamily: getFontFamily() };
    }
  };

  return (
    <Text
      style={[
        styles.defaultText,
        variant ? getVariantStyle() : { fontFamily: getFontFamily() },
        style
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: colors.Text_default,
  },
  title1: {
    fontSize: 22,
    // lineHeight: 28,
  },
  title2: {
    fontSize: 20,
    // lineHeight: 26,
  },
  sub1: {
    fontSize: 18,
    // lineHeight: 24,
  },
  sub2: {
    fontSize: 16,
    // lineHeight: 22,
  },
  sub3: {
    fontSize: 16,
    // lineHeight: 22,
  },
  body1: {
    fontSize: 14,
    // lineHeight: 20,
  },
  body2: {
    fontSize: 12,
    // lineHeight: 18,
  },
});

export default CustomText;