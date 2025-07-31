import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../../styles/colors";
import CustomText from "../../common/CustomText";
import shadows from "../../../styles/shadow";

import { CONTENT_WIDTH } from "../../../constants";

interface SummaryCardProps {
  category: string;
  data: string;
  recent: number;
  icon: React.ReactElement;
}

// 카드 3개가 들어갈 수 있도록 동적 계산
const TOTAL_GAP = 32; // 총 간격
const CARD_WIDTH = (CONTENT_WIDTH - TOTAL_GAP) / 3; // 각 카드 너비

export default function SummaryCard({
  category,
  data,
  recent,
  icon,
}: SummaryCardProps) {
  return (
    <View style={styles.shadowWrapper}>
      <LinearGradient
        colors={["#BCFFFE", `${colors.primary1}B3`]} // B3 = 70% 투명도
        locations={[0.63, 1.0]}
        style={styles.layout}
      >
        <View style={styles.card}>
          <CustomText style={styles.category}>{category}</CustomText>
          {
            <CustomText w="medium" style={styles.data}>
              {data}
              {category == "식사" ? "g" : category == "산책" ? "분" : null}
            </CustomText>
          }
          <CustomText style={styles.recent}>
            {category == "식사"
              ? `+${recent}g`
              : category == "산책"
                ? `+${recent}분`
                : `${recent}분 전`}
          </CustomText>
          <View style={styles.iconContainer}>{icon}</View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    ...shadows.basic,
  },
  layout: {
    width: CARD_WIDTH, // 동적으로 계산된 너비 사용
    height: 150,
    borderRadius: 10,
  },
  card: {
    flex: 1,
    padding: 16,
  },
  iconContainer: {
    position: "absolute", // absolute로 변경해서 레이아웃에 영향 안주도록
    right: 15,
    bottom: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
  },
  category: {
    fontSize: 14,
    color: colors.gray1,
    marginBottom: 4,
  },
  data: {
    fontSize: 24,
    color: colors.gray1,
    marginBottom: 2,
  },
  recent: {
    fontSize: 10,
    color: colors.gray2,
    marginBottom: 12,
  },
});
