import { View, StyleSheet, ViewStyle } from "react-native";
import SummaryCard from "./SummaryCard";

import MealIcon from "../../../assets/ic-meal.svg";
import WalkIcon from "../../../assets/ic-walk.svg";
import SnackIcon from "../../../assets/ic-snack.svg";

import { CONTENT_WIDTH } from "../../../constants";

interface SummaryCardListProps {
  style?: ViewStyle;
}

export default function SummaryCardList({ style }: SummaryCardListProps) {
  return (
    <View style={[styles.container, style]}>
      <SummaryCard
        category="식사"
        data="80"
        recent={30}
        icon={<MealIcon width={60} height={60} />}
      />
      <SummaryCard
        category="산책"
        data="27"
        recent={5}
        icon={<WalkIcon width={60} height={60} />}
      />
      <SummaryCard
        category="간식"
        data="지급"
        recent={28}
        icon={<SnackIcon width={60} height={60} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CONTENT_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
