import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../styles/colors";
import CustomText from "./CustomText";

export default function NextFixedButton() {
  return (
    <View style={styles.bottomButtonWrap}>
      <TouchableOpacity style={styles.nextButton}>
        <CustomText w="semibold" style={styles.nextButtonText}>
          다음
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
