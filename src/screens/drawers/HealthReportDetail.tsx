import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { PADDING } from "../../constants/constants";

import colors from "../../styles/colors";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigation";

import WeightCard from "../../components/healthReport/WeightCard";
import HealthChart from "../../components/healthReport/HealthChart";

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
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: "Pretendard-SemiBold",
      },
    });
  }, [title, navigation]);

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
        <WeightCard />
        <HealthChart />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: PADDING + 20, //44
  },
});
