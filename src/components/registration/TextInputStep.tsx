import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { StepConfig } from "../../types/dogRegistration";
import colors from "../../styles/colors";
import CustomText from "../common/CustomText";

interface TextInputStepProps {
  step: StepConfig;
  value: string;
  isActive: boolean;
  onChangeText: (value: string) => void;
  onComplete: () => void;
}

export const TextInputStep: React.FC<TextInputStepProps> = ({
  step,
  value,
  isActive,
  onChangeText,
  onComplete,
}) => {
  const hasValue = value.trim().length > 0;

  return (
    <View style={[styles.container, isActive && styles.activeContainer]}>
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
      <TextInput
        style={styles.textInput}
        placeholder={step.placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onComplete}
        onBlur={onComplete}
        placeholderTextColor={colors.Text_disabled}
        returnKeyType="done"
        autoFocus={isActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.Border_default,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  activeContainer: {
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
  textInput: {
    fontSize: 14,
    color: colors.Text_default,
    padding: 0,
  },
});
