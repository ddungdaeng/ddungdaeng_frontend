import { View, StyleSheet, ViewStyle, Dimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import CustomText from "../common/CustomText";
import colors from "../../styles/colors";
import shadows from "../../styles/shadow";
import { CARD_PADDING, CONTENT_WIDTH } from "../../constants";

interface LineChartCardProps {
  style?: ViewStyle;
  data?: { value: number; date?: string; label?: string }[];
  title: string;
  maxValue: number;
  startValue: number;
}

export default function LineChartCard({
  style,
  data,
  title,
  maxValue,
  startValue,
}: LineChartCardProps) {
  const CHART_WIDTH = CONTENT_WIDTH - CARD_PADDING * 2 - 40;

  return (
    <View>
      <CustomText w="medium" style={styles.title}>
        {title}
      </CustomText>

      {data ? (
        <View style={[styles.card, style]}>
          <View style={styles.chartWrapper}>
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
              width={CHART_WIDTH}
              height={130}
              yAxisLabelWidth={40} // Y축 라벨 공간
              xAxisIndicesHeight={20} // X축 라벨 높이
            />
          </View>
        </View>
      ) : (
        <View style={styles.noDataCard}>
          <CustomText style={styles.noDataText}>
            아직 등록된 데이터가 없어요!
          </CustomText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 8,
  },
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
  textStyle: {
    color: colors.gray2,
    fontSize: 10,
    fontFamily: "Pretendard-Regular",
  },
  noDataCard: {
    width: CONTENT_WIDTH,
    minHeight: 130,
    backgroundColor: colors.white,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.basic,
  },
  noDataText: {
    fontSize: 14,
    color: colors.gray2,
    textAlign: "center",
  },
});
