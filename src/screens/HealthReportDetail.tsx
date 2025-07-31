import { Text, View, StyleSheet, ScrollView } from "react-native";
import { HORIZONTAL_PADDING } from "../constants";

import colors from "../styles/colors";
import { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types/navigation";

type HealthReportDetailProps = NativeStackScreenProps<
  StackParamList,
  "HealthReportDetail"
>;

export default function HealthReportDetail({
  navigation,
  route: {
    params: { title },
  },
}: HealthReportDetailProps) {
  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: "Pretendard-SemiBold",
      },
    });
  }, [title, navigation]);
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text>{title}</Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: HORIZONTAL_PADDING,
    gap: 21,
  },
});
