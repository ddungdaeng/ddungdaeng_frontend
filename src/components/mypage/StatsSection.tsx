import { StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import CustomText from "../common/CustomText";

interface StatsSectionProps {
  totalRecords?: number;
  walkDays?: number;
  weightRecords?: number;
}

export default function StatsSection({
  totalRecords,
  walkDays,
  weightRecords,
}: StatsSectionProps) {
  const stats = [
    { label: "총 기록 일수", value: totalRecords },
    { label: "산책 횟수", value: walkDays == null ? "-" : walkDays },
    { label: "최근 기록 횟수", value: weightRecords },
  ];

  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statBox}>
          <CustomText variant="body2" style={styles.statLabel}>
            {stat.label}
          </CustomText>
          <CustomText variant="title2" style={styles.statValue}>
            {stat.value}
          </CustomText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.gray200,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 8,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statLabel: {
    color: colors.Text_default,
    marginBottom: 8,
  },
  statValue: {
    color: colors.Text_default,
  },
});
