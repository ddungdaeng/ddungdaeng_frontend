import { Text, View, StyleSheet, ViewStyle } from "react-native";
import shadows from "../shadow";
import colors from "../colors";
import CustomText from "./common/CustomText";

type BasicCardListProps = {
  style?: ViewStyle;
};

export default function BasicCard({ style }: BasicCardListProps) {
  return (
    <View style={[styles.container, style]}>
      <CustomText style={styles.text}>아직 등록된 데이터가 없어요!</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 342,
    minHeight: 106,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 21,
    ...shadows.basic,
  },
  text: {
    fontSize: 14,
    color: colors.gray2,
  },
});
