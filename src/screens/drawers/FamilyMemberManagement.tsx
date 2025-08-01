import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { HORIZONTAL_PADDING } from "../../constants";
import colors from "../../styles/colors";
import CustomText from "../../components/common/CustomText";
import { useState } from "react";

export default function FamilyMemberManagement() {
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
        <CustomText style={{ fontSize: 14 }}>
          함께 기록할수록 더 건강한 하루가 돼요!
        </CustomText>
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
