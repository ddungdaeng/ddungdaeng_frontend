import { View, StyleSheet, ViewStyle } from "react-native";
import shadows from "../../shadow";
import colors from "../../colors";
import CustomText from "../common/CustomText";
import { LineChart } from "react-native-gifted-charts";

type WeightChartProps = {
  style?: ViewStyle;
};

export default function WeightChart({ style }: WeightChartProps) {
  const data = [
    { value: 6, label: "6/30" },
    { value: 6.4, label: "7/1" },
    { value: 6.2, label: "7/2" },
    { value: 6.7, label: "7/3" },
    { value: 6.5, label: "7/4" },
    { value: 7, label: "7/5" },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.card, style]}>
        {/*todo: 여기에 차트 라이브러리 추가 */}
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
          //포커스
          focusEnabled
          focusedDataPointColor={colors.primary1}
          focusedDataPointRadius={3}
          focusTogether
          showTextOnFocus
          // 차트 크기 제어
          width={250} // 차트 너비 명시적 설정
          height={100}
        />
      </View>
      <CustomText style={styles.text}>최근 원재가 기록함</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    width: 342,
    minHeight: 106,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    ...shadows.basic,
    justifyContent: "center",
  },
  text: {
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
