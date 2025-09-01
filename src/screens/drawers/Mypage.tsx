import { useState } from "react";
import { RefreshControl, ScrollView, View, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { PADDING } from "../../constants/constants";
import AccountSection from "../../components/mypage/AccountSection";

export default function Mypage() {
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
        {/* 계정 관리 섹션 */}
        <AccountSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: PADDING,
  },
});
