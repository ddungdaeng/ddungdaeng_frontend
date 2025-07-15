import React, { useState } from "react";
import { View } from "react-native";
import Character from "../../assets/character.svg";
import FloatingButton from "../../components/FloatingButton";
import ActionSheetMenu from "../../components/ActionSheetMenu";
import colors from "../../colors";

type SelectedItem = {
  type: "input" | "load";
  category: "weight" | "meal" | "walk";
};

export default function Dashboard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selected, setSelected] = useState<SelectedItem | null>(null);

  const handleSelect = (
    type: "input" | "load",
    category: "weight" | "meal" | "walk"
  ) => {
    setMenuVisible(false);
    setSelected({ type, category });
  };

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
    </View>
  );
}
