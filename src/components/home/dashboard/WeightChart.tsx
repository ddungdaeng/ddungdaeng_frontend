import { View, StyleSheet, ViewStyle } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { CARD_PADDING, CONTENT_WIDTH } from "../../../constants";

import CustomText from "../../common/CustomText";
import colors from "../../../styles/colors";
import shadows from "../../../styles/shadow";

interface WeightChartProps {
  style?: ViewStyle;
  data?: { value: number; date?: string; label?: string }[];
}

export default function WeightChart({ style, data }: WeightChartProps) {
  const CHART_WIDTH = CONTENT_WIDTH - CARD_PADDING * 2 - 40;

  return (
    <View style={styles.container}>
      <View style={[styles.card, style]}>
        <View style={styles.chartWrapper}>
          <LineChart
            isAnimated
            animationDuration={1000}
            data={data}
            maxValue={1} // 최대값 설정(데이터 시작 지점에서 출발임: yAxisOffset)
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
            yAxisLabelSuffix="kg"
            yAxisTextStyle={styles.textStyle}
            xAxisLabelTextStyle={styles.textStyle}
            showDataPointOnFocus
            stepValue={0.3}
            yAxisThickness={0}
            focusEnabled
            focusedDataPointColor={colors.primary1}
            focusTogether
            showTextOnFocus
            //차트크기 제어
            width={CHART_WIDTH}
            height={130}
            yAxisLabelWidth={40} // Y축 라벨 공간
            xAxisIndicesHeight={20} // X축 라벨 높이
          />
        </View>
      </View>
      <CustomText style={styles.userText}>최근 원재가 기록함</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CONTENT_WIDTH,
    alignItems: "center",
  },
  card: {
    width: CONTENT_WIDTH,
    minHeight: 130,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: CARD_PADDING,
    paddingBottom: CARD_PADDING,
    paddingTop: 25,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.basic,
  },
  chartWrapper: {
    width: "100%",
    minHeight: 130,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // 혹시 넘어가는 부분은 숨김
  },
  userText: {
    marginTop: 7,
    fontSize: 10,
    color: colors.gray2,
    textAlign: "right",
    width: CONTENT_WIDTH, // 전체 너비에서 오른쪽 정렬
  },
  textStyle: {
    color: colors.gray1,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
});
