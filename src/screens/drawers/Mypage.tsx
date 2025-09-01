import { useState } from "react";
import { RefreshControl, ScrollView, View, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { PADDING } from "../../constants/constants";
import AccountSection from "../../components/mypage/AccountSection";
import ProfileHeader from "../../components/mypage/ProfileHeader";
import {
  profileData,
  statsData,
  weeklyData,
} from "../../components/common/mockupData";
import StatsSection from "../../components/mypage/StatsSection";
import GoalProgress from "../../components/mypage/GoalProgress";
import WeeklyChart from "../../components/mypage/WeeklyChart";

export default function Mypage() {
  const [refreshing, setRefreshing] = useState(false);
  const [isEdit, setIsEdit] = useState(false); //수정 버튼

  const onRefresh = async () => {
    setRefreshing(true);
    // await queryClient.refetchQueries({ queryKey: ["tv"] });
    setRefreshing(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
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
        {/* 프로필 헤더 */}
        <ProfileHeader {...profileData} onEditPress={handleEdit} />

        <View style={styles.sectionContainer}>
          {/* 통계 섹션 */}
          <StatsSection {...statsData} />

          {/* 오늘의 목표 섹션 */}
          <GoalProgress percentage={85} />

          {/* 계정 관리 섹션 */}
          <WeeklyChart data={weeklyData} percent={60} />

          {/* 계정 관리 섹션 */}
          <AccountSection />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: PADDING,
  },
  sectionContainer: {
    width: "100%",
    gap: 15,
  },
});
