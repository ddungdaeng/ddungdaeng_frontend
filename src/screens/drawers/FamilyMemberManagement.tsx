import { ScrollView, StyleSheet, View } from "react-native";
import { HORIZONTAL_PADDING } from "../../constants";
import colors from "../../styles/colors";
import CustomText from "../../components/common/CustomText";

export default function FamilyMemberManagement() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
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
