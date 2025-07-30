import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import shadows from "../../styles/shadow";
import colors from "../../styles/colors";
import CustomText from "../common/CustomText";
import { LineChart } from "react-native-gifted-charts";
import { CARD_PADDING, CHART_WIDTH, CONTENT_WIDTH } from "../../constants";

interface WeightChartProps {
  style?: ViewStyle;
  data?: { value: number; date?: string; label?: string }[];
}
export default function WeightChart({ style, data }: WeightChartProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, style]}>
        <LineChart
          isAnimated
          animationDuration={1000}
          data={data}
          yAxisOffset={6} //데이터 시작 지점
          thickness={2}
          areaChart
          color={colors.primary1}
          startFillColor={"rgb(84,219,234)"}
          endFillColor={"rgb(84,219,234)"}
          startOpacity={0.4}
          endOpacity={0.1}
          xAxisColor={colors.gray4}
          yAxisColor={colors.gray4}
          yAxisLabelSuffix="kg" //단위
          yAxisTextStyle={styles.yAxisTextStyle}
          xAxisLabelTextStyle={styles.xAxisLabelTextStyle}
          showDataPointOnFocus //점 노출 디폴트:false
          stepValue={0.3} // Y축 간격
          maxValue={1} // 최대값 설정(데이터 시작 지점에서 출발임: yAxisOffset)
          yAxisThickness={0} //y축 선 없애기
          //포커스
          focusEnabled
          focusedDataPointColor={colors.primary1}
          focusedDataPointRadius={3}
          focusTogether
          showTextOnFocus
          // 동적 너비 계산으로 카드 안에 맞춤
          width={CHART_WIDTH}
          height={100}
        />
      </View>
      <CustomText style={styles.userText}>최근 원재가 기록함</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CONTENT_WIDTH,
  },
  card: {
    width: CONTENT_WIDTH,
    minHeight: 106,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: CARD_PADDING,
    ...shadows.basic,
    justifyContent: "center",
    alignItems: "center", // 차트를 카드 안에서 중앙 정렬
  },
  userText: {
    marginTop: 7,
    fontSize: 10,
    color: colors.gray2,
    textAlign: "right",
  },
  yAxisTextStyle: {
    color: colors.gray2,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
  xAxisLabelTextStyle: {
    color: colors.gray2,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
});
