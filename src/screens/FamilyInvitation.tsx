import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import CustomText from "../components/common/CustomText";
import WalkDog from "../assets/walkCharacter.svg";
import { HORIZONTAL_PADDING } from "../constants";
import colors from "../styles/colors";
import shadows from "../styles/shadow";
import NextFixedButton from "../components/common/NextFixedButton";

interface NavigationProp {
  replace: (routeName: string) => void;
}
interface FamilyInvitationProps {
  navigation: NavigationProp;
}

export default function FamilyInvitation({
  navigation,
}: FamilyInvitationProps) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await queryClient.refetchQueries({ queryKey: ["tv"] });
    setRefreshing(false);
  };

  const next = (): void => {
    navigation.replace("Main");
  };

  // 반려견 정보 데이터
  const dogInfo = [
    { label: "품종", value: "요크셔테리어" },
    { label: "나이", value: "3세" },
    { label: "성별", value: "여자" },
    { label: "중성화", value: "O" },
  ];

  return (
    <View style={styles.wrapper}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CustomText w="bold" style={styles.title}>
          반려견 프로필 카드가 완성됐어요!
        </CustomText>

        <View style={styles.card}>
          {/* 프로필 이미지 */}
          <View style={styles.profileImageContainer}>
            <WalkDog width={100} height={100} />
          </View>
          <CustomText w="semibold" style={styles.dogName}>
            소금이
          </CustomText>

          {/* 반려견 정보 리스트 */}
          <View style={styles.infoContainer}>
            {dogInfo.map((info, index) => (
              <View key={index} style={styles.infoRow}>
                <CustomText style={styles.label}>{info.label}</CustomText>
                <CustomText w="medium" style={styles.labelData}>
                  {info.value}
                </CustomText>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* 하단 고정 버튼*/}
      <NextFixedButton onPress={next} text="공유하기" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 100, // 하단 버튼 공간 확보
  },
  title: {
    color: colors.gray1,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 65,
  },
  card: {
    width: 250,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    ...shadows.basic,
  },
  profileImageContainer: {
    backgroundColor: "#BCFFFE",
    borderRadius: 60,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  dogName: {
    color: colors.gray1,
    fontSize: 24,
    marginBottom: 26,
  },
  infoContainer: {
    alignItems: "center",
    gap: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    width: 143, //고정 크기
  },
  label: {
    fontSize: 14,
    color: colors.gray3,
    width: 60,
  },
  labelData: {
    fontSize: 16,
    color: colors.gray1,
  },
});
