import { Text, View, StyleSheet, ScrollView } from "react-native";
import { HORIZONTAL_PADDING } from "../constants";

import colors from "../styles/colors";
import { useEffect } from "react";

export default function HealthReportDetail({
  navigation: { setOptions },
  route: {
    params: { title },
  },
}) {
  useEffect(() => {
    setOptions({
      title: title,
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: "Pretendard-SemiBold",
      },
    });
  }, []);
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
