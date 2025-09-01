import { StyleSheet, View } from "react-native";

import colors from "../../styles/colors";
import CustomText from "../common/CustomText";

import { PieChart } from "react-native-gifted-charts";
import { pieData } from "../common/mockupData";

interface GoalProgressProps {
  percentage: number;
}
//todo: 차트 끝 동그랗게 바꾸기
export default function GoalProgress({ percentage }: GoalProgressProps) {
  return (
    <View style={styles.container}>
      <CustomText variant="body1" style={styles.title}>
        오늘의 목표 달성률
      </CustomText>
      <View style={styles.pieChart}>
        <PieChart
          donut
          innerRadius={36}
          innerCircleColor={colors.gray200}
          data={pieData}
          radius={50}
          centerLabelComponent={() => {
            return (
              <CustomText variant="sub1" style={{ color: colors.primary1 }}>
                {percentage}%
              </CustomText>
            );
          }}
        />
      </View>
      <View style={styles.description}>
        <CustomText variant="body2" style={{ color: colors.Text_info }}>
          오늘의 관리 목표를 {percentage}% 달성했어요!
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.gray200,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  title: {
    marginBottom: 12,
  },
  pieChart: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  description: {
    justifyContent: "center",
    alignItems: "center",
  },
});
