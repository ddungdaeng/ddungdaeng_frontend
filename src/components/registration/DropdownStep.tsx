import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { StepConfig } from "../../types/dogRegistration";
import colors from "../../styles/colors";
import shadows from "../../styles/shadow";
import CustomText from "../common/CustomText";

interface DropdownStepProps {
  step: StepConfig;
  value: string;
  isActive: boolean;
  onSelect: (value: string) => void;
}

export const DropdownStep: React.FC<DropdownStepProps> = ({
  step,
  value,
  isActive,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasValue = value.trim().length > 0;

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.button, isActive && styles.activeButton]}>
        <CustomText
          variant="body2"
          style={[
            styles.label,
            isActive && styles.activeLabel,
            hasValue && styles.filledLabel,
          ]}
        >
          {step.label}
        </CustomText>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => setIsOpen(!isOpen)}
        >
          <CustomText
            variant="body1"
            style={[styles.text, !value && styles.placeholderText]}
          >
            {value || step.placeholder}
          </CustomText>
          <CustomText
            variant="body2"
            style={[
              styles.arrow,
              { transform: [{ rotate: isOpen ? "180deg" : "0deg" }] },
            ]}
          >
            ▼
          </CustomText>
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.options}>
          {step.options?.map((option, index) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                index === (step.options?.length ?? 0) - 1 && styles.lastOption,
              ]}
              onPress={() => handleSelect(option)}
            >
              <CustomText variant="body1" style={styles.optionText}>
                {option}
              </CustomText>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.Border_default,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  activeButton: {
    borderColor: colors.primary1,
  },
  label: {
    color: colors.Icon_disabled,
    marginBottom: 6,
  },
  activeLabel: {
    color: colors.primary1,
  },
  filledLabel: {
    color: colors.Icon_disabled,
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.Text_default,
  },
  placeholderText: {
    color: colors.Text_disabled,
  },
  arrow: {
    color: colors.Icon_disabled,
  },
  options: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginTop: 4,
    zIndex: 1000,
    ...shadows.basic,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.Border_disabled,
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  optionText: {
    color: colors.Text_sub,
  },
});
