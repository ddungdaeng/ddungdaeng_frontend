import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import CustomText from "../common/CustomText";
import colors from "../../styles/colors";
import shadows from "../../styles/shadow";

type LineChartCardProps = {
  style?: ViewStyle;
  data?: { value: number; date?: string; label?: string }[];
  title: string;
  maxValue: number;
  startValue: number;
};

export default function LineChartCard({
  style,
  data,
  title,
  maxValue,
  startValue,
}: LineChartCardProps) {
  const { width: screenWidth } = Dimensions.get("window");
  const chartWidth = screenWidth - 48 - 90; // 총 여백을 한 번에 계산
  return (
    <View>
      <CustomText style={styles.title}>{title}</CustomText>

      <View style={[styles.card, style]}>
        {data ? (
          <LineChart
            // isAnimated
            animationDuration={1000}
            data={data}
            maxValue={maxValue} // 최대값 설정(데이터 시작 지점에서 출발임: yAxisOffset)
            yAxisOffset={startValue} //데이터 시작 지점
            showValuesAsDataPointsText //점 위에 데이터 텍스트 표시
            textColor1={colors.gray2}
            thickness={2}
            dataPointsColor1={colors.gray2} //점 색상
            color={colors.gray2} //라인 색상
            textShiftY={-7} //점 위에 데이터 텍스트 위치
            textShiftX={-5}
            startFillColor={"rgb(84,219,234)"}
            endFillColor={"rgb(84,219,234)"}
            startOpacity={0.4}
            endOpacity={0.1}
            xAxisColor={colors.gray4}
            yAxisColor={colors.gray4}
            yAxisLabelSuffix="kg" //단위
            yAxisTextStyle={styles.textStyle}
            xAxisLabelTextStyle={styles.textStyle}
            stepValue={0.3} // Y축 간격
            yAxisThickness={0}
            // 차트 크기 제어
            width={chartWidth}
            height={100}
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
