import React, { useState } from "react";
import { ScrollView, View, StyleSheet, RefreshControl } from "react-native";

import colors from "../../styles/colors";
import { PADDING } from "../../constants/constants";
import { weightData } from "../../components/common/mockupData";

import FloatingButton from "../../components/home/dashboard/floatingButton/FloatingButton";
import ActionSheetMenu from "../../components/home/dashboard/floatingButton/ActionSheetMenu";
import InputModal from "../../components/home/dashboard/floatingButton/InputModal";
import SummaryCardList from "../../components/home/dashboard/SummaryCardList";
import CharacterLoad from "../../components/home/dashboard/CharacterLoad";
import WeightChart from "../../components/home/dashboard/WeightChart";
import GoalWeightProgress from "../../components/home/dashboard/GoalWeightProgress";
import HealthReport from "../../components/common/HealthReport";

interface SelectedItem {
  type: "input" | "load";
  category: "weight" | "meal" | "walk";
  label: string;
}

export default function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selected, setSelected] = useState<SelectedItem | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleSelect = (
    type: "input" | "load",
    category: "weight" | "meal" | "walk"
  ) => {
    let label = "";

    if (type === "input") {
      if (category === "weight") label = "오늘의 체중 입력하기";
      if (category === "meal") label = "오늘의 식사량 입력하기";
      if (category === "walk") label = "오늘의 산책 입력하기";
    } else if (type === "load") {
      if (category === "weight") label = "최근 체중 불러오기";
      if (category === "meal") label = "최근 식사량 불러오기";
      if (category === "walk") label = "최근 산책 불러오기";
    }
    setMenuVisible(false);
    setSelected({ type, category, label });
  };

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
        {/* 유저 로드 */}
        <CharacterLoad />

        {/* 프로그레스 바 */}
        <GoalWeightProgress goal={6} first={7} current={6.5} />

        {/* 몸무게 차트 */}
        <WeightChart data={weightData} />

        {/* 요약 카드 */}
        <SummaryCardList />

        {/* 이번주 건강 리포트 */}
        <HealthReport
          title="이번주 건강 리포트"
          averageWeight={4.2}
          feedingAmount={82}
          treatAmount={3}
          walkingRate={3}
        />
      </ScrollView>

      {/* 버튼 */}
      <FloatingButton
        onPress={() => setMenuVisible(true)}
        isMenuOpen={menuVisible}
      />

      <ActionSheetMenu
        isMenuOpen={menuVisible}
        onClose={() => setMenuVisible(false)}
        onSelect={handleSelect}
      />

      {selected?.type === "input" && (
        <InputModal
          visible={true}
          category={selected.category}
          label={selected.label}
          onClose={() => setSelected(null)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: PADDING,
    gap: 21,
  },
});
