import React, { useState } from "react";
import { View } from "react-native";
import Character from "../../assets/character.svg";
import FloatingButton from "../../components/dashboard/FloatingButton";
import ActionSheetMenu from "../../components/dashboard/ActionSheetMenu";
import colors from "../../colors";
import InputModal from "../../components/dashboard/InputModal";

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
  console.log("selected:", selected);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
      }}
    >
      <Character width={200} height={200} />
      <FloatingButton
        onPress={() => setMenuVisible(true)}
        isMenuOpen={menuVisible}
      />
      <ActionSheetMenu
        isMenuOpen={menuVisible}
        onClose={() => setMenuVisible(false)} //배경 누르면 실행될 함수
        onSelect={handleSelect} //메뉴 항목 선택했을 때 실행될 콜백 함수
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
