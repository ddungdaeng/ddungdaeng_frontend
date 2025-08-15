import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { PADDING } from "../../constants/constants";
import colors from "../../styles/colors";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";

import WeightCard from "../../components/healthReport/WeightCard";
import HealthChart from "../../components/healthReport/HealthChart";

// Props 타입 정의 변경
type HealthReportDetailProps = NativeStackScreenProps<
  RootStackParamList,
  "HealthReportDetail"
>;

// Route 타입 정의
type HealthReportDetailRouteProp = RouteProp<
  RootStackParamList,
  "HealthReportDetail"
>;

export default function HealthReportDetail({
  navigation,
}: HealthReportDetailProps) {
  const route = useRoute<HealthReportDetailRouteProp>();
  const { title, averageWeight, feedingAmount, treatAmount, walkingRate } =
    route.params;

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
        {/* WeightCard와 HealthChart에 파라미터 전달 */}
        <WeightCard
          averageWeight={averageWeight}
          previousWeight={averageWeight - 0.3} //fix: 이전 체중 (0.3kg 감량 표시..), 나중에 이전 몸무게 데이터 받아서 수정하기
        />
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
