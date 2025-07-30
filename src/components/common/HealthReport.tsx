import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import shadows from "../../styles/shadow";
import colors from "../../styles/colors";
import CustomText from "./CustomText";

interface HealthReportProps {
  style?: ViewStyle;
  title: string;
  averageWeight: number; //평균체중
  feedingAmount: number; //급여량
  treatAmount: number; //간식량
  walkingRate: number; //산책률
}

export default function HealthReport({
  style,
  title,
  averageWeight,
  feedingAmount,
  treatAmount,
  walkingRate,
}: HealthReportProps) {
  return (
    <View style={[styles.container, style]}>
      <CustomText w="semibold" style={styles.reportTitle}>
        {title}
      </CustomText>
      <View style={styles.reportDetailContainer}>
        <View style={styles.detailGroup}>
          <CustomText style={styles.reportDetail}>
            평균 체중: {averageWeight}kg
          </CustomText>
          <CustomText style={{ marginLeft: 8, fontSize: 8 }}>
            (+0.3kg 증가)
          </CustomText>
        </View>
        <View style={styles.detailGroup}>
          <CustomText style={styles.reportDetail}>
            급여량: {feedingAmount}g/일
          </CustomText>
          <CustomText style={{ marginLeft: 8, fontSize: 8 }}>
            (기준보다 +7g)
          </CustomText>
        </View>
        <CustomText style={styles.reportDetail}>
          간식량: {treatAmount}회/일
        </CustomText>
        <CustomText style={styles.reportDetail}>
          산책률: {walkingRate}회/7일
        </CustomText>
      </View>
      <TouchableOpacity style={{ alignSelf: "flex-end" }}>
        <CustomText style={styles.click}>전체 리포트 보기 {">"}</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 342,
    minHeight: 106,
    backgroundColor: colors.white,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 9,
    paddingLeft: 21,
    paddingRight: 11,
    ...shadows.basic,
  },
  reportTitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  reportDetailContainer: {
    gap: 4,
  },
  detailGroup: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  reportDetail: {
    fontSize: 10,
  },
  click: {
    fontSize: 10,
    color: colors.gray2,
  },
});
