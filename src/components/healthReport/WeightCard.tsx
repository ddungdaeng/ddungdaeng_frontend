import { View, StyleSheet } from "react-native";

import WeightDog from "../../assets/weightCharacter.svg";
import CustomText from "../common/CustomText";

import colors from "../../styles/colors";
import shadows from "../../styles/shadow";

export default function WeightCard() {
  return (
    <View style={styles.card}>
      <WeightDog width={110} height={118} />
      <CustomText w="semibold" style={styles.cardName}>
        체중 카드
      </CustomText>
      <CustomText style={styles.weightData}>0.3kg 감량</CustomText>
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
