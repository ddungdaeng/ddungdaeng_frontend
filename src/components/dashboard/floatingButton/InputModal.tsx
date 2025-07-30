import React, { useState } from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import CustomText from "../../common/CustomText";
import colors from "../../../styles/colors";

import MealDog from "../../../assets/mealCharacter.svg";
import WalkDog from "../../../assets/walkCharacter.svg";
import WeightDog from "../../../assets/weightCharacter.svg";

type CategoryType = "weight" | "meal" | "walk";

export default function InputModal({
  visible,
  label,
  category,
  onClose,
}: {
  visible: boolean;
  label: string;
  category: CategoryType;
  onClose: () => void;
}) {
  const [text, setText] = useState("");

  const onSubmit = () => {
    if (!text) return;

    //저장 로직
    switch (category) {
      case "walk":
        console.log("산책 데이터 저장:", text);
        break;
      case "meal":
        console.log("식사 데이터 저장:", text);
        break;
      case "weight":
        console.log("체중 데이터 저장:", text);
        break;
    }

    onClose();
    setText("");
  };

  const ImageLoad = () => {
    switch (category) {
      case "walk":
        return <WalkDog />;
      case "meal":
        return <MealDog />;
      case "weight":
        return <WeightDog />;
      default:
        return null;
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <ImageLoad />
          <CustomText w="semibold" style={styles.title}>
            {label}
          </CustomText>
          <TextInput
            style={styles.input}
            selectionColor={colors.primary1} //커서 색깔
            autoFocus={true}
            placeholder="입력하기"
            placeholderTextColor="gray"
            returnKeyLabel="done" //android
            returnKeyType="done" //ios
            onChangeText={setText}
            onSubmitEditing={onSubmit}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 41,
    paddingVertical: 27,
    minWidth: 358,
    minHeight: 270,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 4,
    fontSize: 22,
  },
  input: {
    width: 304,
    height: 41,
    marginTop: 21,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: colors.gray3,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontFamily: "Pretendard-Regular",
  },
});
