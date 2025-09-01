import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import CustomText from "../../common/CustomText";
import colors from "../../../styles/colors";
import shadows from "../../../styles/shadow";

interface StackBarDatum {
  label: string;
  stacks: { value: number; color: string; marginBottom?: number }[];
}

interface StackedBarChartCardProps {
  style?: ViewStyle;
  data?: StackBarDatum[];
  title: string;
}

export default function StackedBarChartCard({
  style,
  data,
  title,
}: StackedBarChartCardProps) {
  const { width: screenWidth } = Dimensions.get("window");
  const chartWidth = screenWidth - 48 - 90; // 총 여백을 한 번에 계산
  return (
    <View>
      <CustomText w="medium" style={styles.title}>
        {title}
      </CustomText>

      <View style={[styles.card, style]}>
        {data ? (
          <BarChart
            width={chartWidth}
            barWidth={22}
            barBorderRadius={3}
            noOfSections={4}
            stackData={data}
            yAxisThickness={0}
            xAxisThickness={0}
            // xy축 라벨 색상
            yAxisTextStyle={styles.textStyle}
            xAxisLabelTextStyle={{
              ...styles.textStyle,
              marginLeft: 8, //가운데 정렬 맞추려고..
            }}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <CustomText style={styles.textInCard}>
              아직 등록된 데이터가 없어요!
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 8,
  },
  card: {
    flex: 1,
    minHeight: 114,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    ...shadows.basic,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: colors.gray2,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
  xAxisLabelTextStyle: {
    color: colors.gray2,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
  textInCard: {
    fontSize: 14,
    color: colors.gray2,
    textAlign: "center",
  },
});
