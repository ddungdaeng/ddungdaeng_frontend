import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../../styles/colors";
import CustomText from "../common/CustomText";

import { BarChart } from "react-native-gifted-charts";

interface WeeklyChartProps {
  percent: number;
  data?: { value: number; date?: string; label?: string }[];
}

//fix: 높이 조절ㅠㅠ
export default function WeeklyChart({ percent, data }: WeeklyChartProps) {
  const { width: screenWidth } = Dimensions.get("window");
  const chartWidth = screenWidth - (15 * 2 + 14 * 2); // 총 여백을 한 번에 계산

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText variant="body1" style={styles.title}>
          저번주 목표 달성도
        </CustomText>

        <CustomText variant="body2" style={styles.percent}>
          {percent}%
        </CustomText>
      </View>
      <View style={{ paddingHorizontal: 14 }}>
        <BarChart
          width={chartWidth}
          isAnimated
          barWidth={22}
          maxValue={10} //최대 값
          noOfSections={3} //가로줄 몇 개 할 건지
          hideRules
          barBorderRadius={4}
          frontColor={colors.primary2}
          data={data}
          initialSpacing={0} //차트가 시작하는 위치
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisLabelWidth={0} //y축 없애기
          // x축 라벨 색상
          xAxisLabelTextStyle={styles.textStyle}
        />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 12,
  },
  percent: {
    color: colors.Text_info,
  },
  textStyle: {
    color: colors.gray2,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
});
