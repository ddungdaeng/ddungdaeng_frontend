import { View, StyleSheet, ViewStyle } from "react-native";
import SummaryCard from "./SummaryCard";

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
    flexDirection: "row",
    gap: 16,
  },
});
