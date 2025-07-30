import { View, StyleSheet, ViewStyle } from "react-native";
import SummaryCard from "./SummaryCard";
import { CONTENT_WIDTH } from "../../constants";

interface SummaryCardListProps {
  style?: ViewStyle;
}

import { summaryData } from "../common/mockupData";

export default function SummaryCardList({ style }: SummaryCardListProps) {
  return (
    <View style={[styles.container, style]}>
      {summaryData.map((item) => (
        <SummaryCard
          key={item.id}
          category={item.category}
          data={item.data}
          recent={item.recent}
          icon={item.icon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CONTENT_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between", // 카드들을 균등하게 배치
  },
});
