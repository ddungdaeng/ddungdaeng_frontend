import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../../styles/colors";

interface DropdownProps {
  placeholder: string;
  value: string;
  onSelect: (value: string) => void;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  hasError?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  value,
  onSelect,
  options,
  isOpen,
  onToggle,
  hasError = false,
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity
        style={[styles.dropdownButton, hasError && styles.errorInput]}
        onPress={onToggle}
      >
        <Text
          style={[
            styles.dropdownButtonText,
            value ? styles.selectedText : styles.placeholderText,
          ]}
        >
          {value || placeholder}
        </Text>
        <Text style={styles.dropdownArrow}>{isOpen ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownList}>
          <ScrollView style={styles.dropdownScrollView} nestedScrollEnabled>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => onSelect(option)}
              >
                <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    width: "100%",
    position: "relative",
    zIndex: 1000,
  },
  dropdownButton: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  dropdownButtonText: {
    fontSize: 16,
    flex: 1,
  },
  dropdownArrow: {
    fontSize: 12,
    color: colors.gray2,
  },
  dropdownList: {
    position: "absolute",
    top: 55,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 8,
    maxHeight: 200,
    zIndex: 1000,
  },
  dropdownScrollView: {
    maxHeight: 200,
  },
  dropdownItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray5,
  },
  dropdownItemText: {
    fontSize: 16,
    color: colors.gray1,
  },
  selectedText: {
    color: colors.gray1,
  },
  placeholderText: {
    color: colors.gray3,
  },
  errorInput: {
    borderColor: colors.red,
  },
});

export default Dropdown;
