import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { PADDING } from "../../constants";
import colors from "../../styles/colors";
import HealthReport from "../../components/common/HealthReport";
import { useState } from "react";

export default function HealthReportCollection() {
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
    padding: PADDING,
    gap: 21,
  },
});
