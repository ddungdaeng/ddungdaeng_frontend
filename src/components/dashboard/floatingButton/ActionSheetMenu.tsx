import React from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomText from "../../common/CustomText";
import shadows from "../../../styles/shadow";
import colors from "../../../styles/colors";

type ActionSheetMenuProps = {
  isMenuOpen: boolean;
  onClose: () => void;
  onSelect: (
    type: "input" | "load",
    category: "weight" | "meal" | "walk"
  ) => void;
};

type OptionProps = {
  label: string;
  onPress: () => void;
};

export default function ActionSheetMenu({
  isMenuOpen,
  onClose,
  onSelect,
}: ActionSheetMenuProps) {
  if (!isMenuOpen) return null;
  const insets = useSafeAreaInsets();

  const Option = ({ label, onPress }: OptionProps) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <CustomText style={styles.optionText}>{label}</CustomText>
    </TouchableOpacity>
  );

  return (
    <Modal visible={isMenuOpen} transparent animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <View style={[styles.container, { bottom: insets.bottom + 135 }]}>
          <View style={styles.card}>
            <Option
              label="오늘의 체중 입력하기"
              onPress={() => onSelect("input", "weight")}
            />
            <Option
              label="오늘의 식사량 입력하기"
              onPress={() => onSelect("input", "meal")}
            />
            <Option
              label="오늘의 산책 입력하기"
              onPress={() => onSelect("input", "walk")}
            />
          </View>

          <View style={styles.card}>
            <Option
              label="최근 체중 불러오기"
              onPress={() => onSelect("load", "weight")}
            />
            <Option
              label="최근 식사량 불러오기"
              onPress={() => onSelect("load", "meal")}
            />
            <Option
              label="최근 산책 불러오기"
              onPress={() => onSelect("load", "walk")}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    position: "absolute",
    gap: 6,
    right: 23,
    minWidth: 122,
    minHeight: 108,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 16,
    ...shadows.light,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 10,
  },
});
