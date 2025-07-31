import { ScrollView, StyleSheet, View } from "react-native";
import { HORIZONTAL_PADDING } from "../constants";
import colors from "../styles/colors";
import HealthReport from "../components/common/HealthReport";

export default function HealthReportCollection() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HealthReport
          title="7월 1주차"
          averageWeight={4.2}
          feedingAmount={82}
          treatAmount={3}
          walkingRate={3}
        />
        <HealthReport
          title="7월 2주차"
          averageWeight={4.2}
          feedingAmount={82}
          treatAmount={3}
          walkingRate={3}
        />
        <HealthReport
          title="7월 3주차"
          averageWeight={4.2}
          feedingAmount={82}
          treatAmount={3}
          walkingRate={3}
        />
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
