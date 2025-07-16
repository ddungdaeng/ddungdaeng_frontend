import { Text, View, StyleSheet, ViewStyle } from "react-native";
import shadows from "../../shadow";
import colors from "../../colors";
import CustomText from "../common/CustomText";

type WeightChartProps = {
  style?: ViewStyle;
};

export default function WeightChart({ style }: WeightChartProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, style]}>
        {/*todo: 여기에 차트 라이브러리 추가 */}
      </View>
      <CustomText style={styles.text}>최근 원재가 기록함</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    minWidth: 342,
    minHeight: 106,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 21,
    ...shadows.basic,
  },
  text: {
    marginTop: 7,
    fontSize: 10,
    color: colors.gray2,
    textAlign: "right",
  },
});
