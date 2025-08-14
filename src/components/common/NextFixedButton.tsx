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
      <TouchableOpacity style={styles.ButtonContainer} onPress={onPress}>
        <CustomText variant="sub2" style={styles.buttonText}>
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
    left: 24,
    right: 24,
  },
  ButtonContainer: {
    backgroundColor: colors.primary1,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
  },
});
