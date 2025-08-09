import React, { useState } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import CustomText from "../../components/common/CustomText";
import colors from "../../styles/colors";
import {
  barData,
  radarData,
  walkData,
  weightData,
} from "../../components/common/mockupData";
import RadarChartCard from "../../components/home/change/RadarChartCard";
import LineChartCard from "../../components/home/change/LineChartCard";
import BarChartCard from "../../components/home/change/BarChartCard";
import { PADDING } from "../../constants";

export default function Change() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await queryClient.refetchQueries({ queryKey: ["tv"] });
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CustomText w="semibold" style={styles.title}>
          얼마나 채웠개?
        </CustomText>

        {/* 방사형 차트 */}
        <RadarChartCard data={radarData} />

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
          goalValue={300}
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
    padding: PADDING,
    gap: 28,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
    alignSelf: "flex-start",
  },
});
