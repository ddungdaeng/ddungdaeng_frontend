import { useState } from "react";
import CustomText from "../../components/common/CustomText";
import { RefreshControl, ScrollView, View, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { PADDING } from "../../constants/constants";

export default function DogProfileManagement() {
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
        <CustomText
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          반려견 프로필 관리
        </CustomText>
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
