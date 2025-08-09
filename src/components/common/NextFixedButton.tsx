import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../styles/colors";
import CustomText from "./CustomText";

interface NextFixedButtonProps {
  onPress: () => void;
  text: string;
}

export default function NextFixedButton({
  onPress,
  text,
}: NextFixedButtonProps) {
  return (
    <View style={styles.bottomButtonWrap}>
      <TouchableOpacity style={styles.nextButton} onPress={onPress}>
        <CustomText w="semibold" style={styles.nextButtonText}>
          {text}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomButtonWrap: {
    position: "absolute",
    bottom: 30,
    left: 23,
    right: 23,
  },
  nextButton: {
    width: "100%",
    backgroundColor: colors.primary1,
    borderRadius: 10,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 20,
  },
});
