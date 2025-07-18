import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import shadows from "../../shadow";
import colors from "../../colors";
import { BarChart } from "react-native-gifted-charts";
import CustomText from "../common/CustomText";

type BarChartCardProps = {
  style?: ViewStyle;
  data?: { value: number; date?: string; label?: string }[];
  title: string;
  maxValue: number;
  goalValue: number;
  unit: string;
};

export default function BarChartCard({
  style,
  data,
  title,
  maxValue,
  goalValue,
  unit,
}: BarChartCardProps) {
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
            // isAnimated
            barWidth={22}
            maxValue={maxValue} //최대 값
            noOfSections={3} //가로줄 몇 개 할 건지
            hideRules
            showReferenceLine1 //목표선(기준선)
            referenceLine1Position={goalValue} //목표선(기준선) 값
            referenceLine1Config={{
              color: colors.gray3, //목표선(기준선) 색상
            }}
            barBorderRadius={4}
            frontColor={colors.primary2}
            data={data}
            yAxisThickness={0}
            xAxisThickness={0}
            yAxisLabelSuffix={unit} //단위
            // xy축 라벨 색상
            yAxisTextStyle={styles.textStyle}
            xAxisLabelTextStyle={styles.textStyle}
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
  textInCard: {
    fontSize: 14,
    color: colors.gray2,
    textAlign: "center",
  },
});
