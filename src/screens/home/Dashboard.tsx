import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import colors from "../../styles/colors";
import { weightData } from "../../components/common/mockupData";

import FloatingButton from "../../components/dashboard/FloatingButton";
import ActionSheetMenu from "../../components/dashboard/ActionSheetMenu";
import InputModal from "../../components/dashboard/InputModal";
import SummaryCardList from "../../components/dashboard/SummaryCardList";
import CharacterLoad from "../../components/dashboard/CharacterLoad";
import WeightChart from "../../components/dashboard/WeightChart";
import GoalWeightProgress from "../../components/dashboard/GoalWeightProgress";
import HealthReport from "../../components/common/HealthReport";

type SelectedItem = {
  type: "input" | "load";
  category: "weight" | "meal" | "walk";
  label: string;
};

export default function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selected, setSelected] = useState<SelectedItem | null>(null);

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

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
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
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 43,
    paddingVertical: 24,
    gap: 21,
  },
});
