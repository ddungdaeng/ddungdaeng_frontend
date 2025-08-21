import React from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../common/CustomText";
import SettingsItem, { SettingsItemProps } from "./SettingItem";
import { PADDING } from "../../constants/constants";
import colors from "../../styles/colors";

interface SettingsSectionProps {
  title: string;
  items: SettingsItemProps[];
}

const SettingsSection = ({ title, items }: SettingsSectionProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <CustomText variant="sub1">{title}</CustomText>
      </View>
      <View style={styles.items}>
        {items.map((item) => (
          <SettingsItem key={item.title} {...item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: PADDING,
  },
  title: {
    marginBottom: PADDING,
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  items: {
    gap: 16,
  },
});

export default SettingsSection;
