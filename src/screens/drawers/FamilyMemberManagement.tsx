import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { HORIZONTAL_PADDING } from "../../constants";

import colors from "../../styles/colors";
import shadows from "../../styles/shadow";
import CustomText from "../../components/common/CustomText";
import Camera from "../../assets/ic-camera.svg";
import Share from "../../assets/ic-share.svg";
import GoldMedal from "../../assets/ic-goldMedal.svg";
import SilverMedal from "../../assets/ic-silverMedal.svg";
import BronzeMedal from "../../assets/ic-bronzeMedal.svg";

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
        <CustomText style={styles.text}>
          함께 기록할수록 더 건강한 하루가 돼요!
        </CustomText>
        <View style={styles.card}>
          <TouchableOpacity style={styles.camera}>
            <Camera />
          </TouchableOpacity>
          <CustomText w="medium" style={styles.userName}>
            최원재
          </CustomText>
          <CustomText w="medium" style={styles.label}>
            기록 횟수 103회
          </CustomText>
          <CustomText w="medium" style={styles.label}>
            기여도 순위 2위
          </CustomText>
        </View>

        {/**여기에 라인업 */}
        <View style={styles.medalContainer}>
          {/* 1등 - 금메달 */}
          <View style={styles.rankingRow}>
            <GoldMedal />
            <CustomText style={styles.nameText}>윤다인</CustomText>
            <CustomText style={styles.countText}>130회</CustomText>
          </View>

          {/* 2등 - 은메달 */}
          <View style={styles.rankingRow}>
            <SilverMedal />
            <CustomText style={styles.nameText}>최원재</CustomText>
            <CustomText style={styles.countText}>100회</CustomText>
          </View>

          {/* 3등 - 동메달 */}
          <View style={styles.rankingRow}>
            <BronzeMedal />
            <CustomText style={styles.nameText}>이병화</CustomText>
            <CustomText style={styles.countText}>80회</CustomText>
          </View>

          {/* 4등 - 메달 없음 */}
          <View style={styles.rankingRow}>
            <View style={styles.emptyMedal} />
            <CustomText style={styles.nameText}>변우진</CustomText>
            <CustomText style={styles.countText}>70회</CustomText>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <CustomText w="semibold" style={styles.shareText}>
            가족 초대하기
          </CustomText>
          <Share />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  text: {
    color: colors.gray1,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 36,
  },
  card: {
    width: 199,
    height: 272,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.basic,
  },
  camera: {
    backgroundColor: colors.gray4,
    borderRadius: "50%",
    width: 96,
    height: 96,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  userName: {
    color: colors.gray1,
    fontSize: 24,
    marginBottom: 9.6,
  },
  label: {
    fontSize: 16,
  },
  highlight: {
    color: colors.primary1,
  },
  button: {
    color: colors.gray1,
    width: 188,
    height: 60,
    backgroundColor: colors.primary2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  shareText: {
    fontSize: 20,
    color: colors.gray1,
    marginRight: 13,
  },
  medalContainer: {
    marginVertical: 56,
  },
  rankingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    justifyContent: "space-between",
  },
  emptyMedal: {
    width: 30,
    height: 30,
  },
  nameText: {
    fontSize: 14,
    color: colors.black,
    marginLeft: 20,
  },
  countText: {
    fontSize: 14,
    color: colors.black,
    minWidth: 60,
    textAlign: "right",
  },
});
