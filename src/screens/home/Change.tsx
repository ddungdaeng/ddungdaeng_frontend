import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomText from "../../components/common/CustomText";
import LineChartCard from "../../components/change/LineChartCard";
import {
  barData,
  // stackData,
  walkData,
  weightData,
} from "../../components/common/mockupData";
import BarChartCard from "../../components/change/BarChartCard";
import StackedBarChartCard from "../../components/change/StackedBarChartCard";
import RadarChartCard from "../../components/change/RadarChartCard";
import colors from "../../styles/colors";

export default function Change() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <CustomText w="semibold" style={styles.title}>
          얼마나 채웠개?
        </CustomText>

        {/* 방사형 차트 */}
        {/* <RadarChartCard /> */}

        {/* 체중 변화 */}
        <LineChartCard
          data={weightData}
          title="체중 변화"
          maxValue={1}
          startValue={6}
        />

        {/* 간식 횟수 변화 */}
        <BarChartCard
          data={barData}
          title="간식 횟수 변화"
          maxValue={3}
          goalValue={2}
          unit="개"
        />

        {/* 루틴 기록율 변화 */}
        <LineChartCard title="루틴 기록률 변화" maxValue={1} startValue={6} />

        {/* 산책 횟수 변화 */}
        <BarChartCard
          data={walkData}
          title="산책 횟수 변화"
          maxValue={900}
          goalValue={350}
          unit="회"
        />
        {/* 가족 참여율 */}
        {/* <StackedBarChartCard data={stackData} title="가족 참여율" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 23,
    paddingHorizontal: 24,
    gap: 28,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  lineChartCard: {},
});
