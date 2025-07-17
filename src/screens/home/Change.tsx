import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CustomText from "../../components/common/CustomText";
import colors from "../../colors";
import LineChartCard from "../../components/change/LineChartCard";
import { weightData } from "../../components/common/mockupData";

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

        {/* 체중 변화 */}
        <LineChartCard data={weightData} title="체중 변화" />
        {/* 간식 횟수 변화 */}

        {/* 루틴 기록율 변화 */}
        <LineChartCard title="루틴 기록률 변화" />

        {/* 가족 참여율 */}
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
