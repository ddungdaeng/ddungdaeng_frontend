import { View, StyleSheet } from "react-native";

import WeightDog from "../../assets/weightCharacter.svg";
import CustomText from "../common/CustomText";

import colors from "../../styles/colors";
import shadows from "../../styles/shadow";

interface WeightCardProps {
  averageWeight?: number;
  previousWeight?: number;
}

export default function WeightCard({
  averageWeight = 0,
  previousWeight = 0,
}: WeightCardProps) {
  // 체중 변화 계산
  const weightChange = averageWeight - previousWeight;
  const isGain = weightChange > 0;
  const changeText =
    weightChange === 0
      ? "체중 유지"
      : `${Math.abs(weightChange).toFixed(1)}kg ${isGain ? "증가" : "감량"}`;

  return (
    <View style={styles.card}>
      <WeightDog width={110} height={118} />
      <CustomText w="semibold" style={styles.cardName}>
        체중 카드
      </CustomText>
      <CustomText style={styles.weightData}>{changeText}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 253,
    height: 241,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.basic,
  },
  cardName: {
    fontSize: 18,
    textAlign: "center",
  },
  weightData: {
    marginTop: 19,
    color: colors.gray2,
    fontSize: 16,
    textAlign: "center",
  },
});
