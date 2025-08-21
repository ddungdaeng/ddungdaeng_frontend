import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { PADDING } from "../../constants/constants";
import { NavigationProp } from "../../types/navigation";
import colors from "../../styles/colors";

import SettingsSection from "../../components/settings/SettingsSection";

interface SettingsProps {
  navigation: NavigationProp;
}

export default function Settings({ navigation }: SettingsProps) {
  const [recordAlert, setRecordAlert] = useState(true); //체중 기록 알림
  const [walkAlert, setWalkAlert] = useState(true); //산책 알림
  const [weeklyReport, setWeeklyReport] = useState(false); //주간 리포트 요약

  const alertItems = [
    {
      title: "체중 기록 알림",
      type: "toggle" as const, //리터럴 타입 호환하려고 as const
      value: recordAlert,
      onToggle: setRecordAlert,
    },
    {
      title: "산책 알림",
      type: "toggle" as const,
      value: walkAlert,
      onToggle: setWalkAlert,
    },
    {
      title: "주간 리포트 요약",
      type: "toggle" as const,
      value: weeklyReport,
      onToggle: setWeeklyReport,
    },
  ];

  const feedbackItems = [
    { title: "문의하기", onPress: () => navigation.navigate("Inquiry") },
    { title: "피드백 보내기", onPress: () => navigation.navigate("Feedback") },
  ];

  const policyItems = [
    { title: "이용약관", onPress: () => navigation.navigate("Terms") },
    {
      title: "개인정보 처리방침",
      onPress: () => navigation.navigate("Privacy"),
    },
    {
      title: "오픈소스 라이선스",
      onPress: () => navigation.navigate("License"),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <SettingsSection title="알림 설정" items={alertItems} />
        <View style={styles.grayBox} />

        <SettingsSection title="문의 및 피드백" items={feedbackItems} />
        <View style={styles.grayBox} />

        <SettingsSection title="약관 및 정책" items={policyItems} />
        <View style={styles.grayBox} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: PADDING + 33, //57
  },
  grayBox: {
    width: "100%",
    height: 10,
    backgroundColor: colors.Border_disabled,
  },
});
