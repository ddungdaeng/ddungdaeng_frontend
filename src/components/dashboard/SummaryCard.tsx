import { View, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import shadows from "../../styles/shadow";
import { LinearGradient } from "expo-linear-gradient";
import CustomText from "../common/CustomText";

type SummaryCardProps = {
  category: string;
  data: string;
  recent: string;
  icon: React.ReactElement;
};

export default function SummaryCard({
  category,
  data,
  recent,
  icon,
}: SummaryCardProps) {
  return (
    <View style={styles.shadowWrapper}>
      <LinearGradient
        colors={["#BCFFFE", colors.primary1]}
        style={styles.layout}
      >
        <View style={styles.card}>
          <CustomText style={styles.category}>{category}</CustomText>
          <CustomText w="medium" style={styles.data}>
            {data}
          </CustomText>
          <CustomText style={styles.recent}>{recent}</CustomText>
          <View style={styles.iconContainer}>{icon}</View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    ...shadows.basic,
  },
  layout: {
    width: 103,
    height: 132,
    borderRadius: 10,
  },
  card: {
    padding: 14,
    justifyContent: "space-between",
  },
  iconContainer: {
    left: 28,
    bottom: 7,
    justifyContent: "center",
    height: 40,
  },
  category: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 4,
  },
  data: {
    fontSize: 24,
    color: colors.black,
    marginBottom: 2,
  },
  recent: {
    fontSize: 10,
    color: colors.gray2,
    marginBottom: 12,
  },
});
