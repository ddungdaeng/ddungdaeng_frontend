import { TouchableOpacity, View, StyleSheet, Alert } from "react-native";

import colors from "../../styles/colors";
import CustomText from "../common/CustomText";

import { NavigationProp } from "../../types/navigation";
import { kakaoLogout, kakaoUnlink } from "../../services/AuthService";
import { useNavigation } from "@react-navigation/native";

export default function AccountSection() {
  const navigation = useNavigation<NavigationProp>();

  //로그아웃
  const handleLogout = (): void => {
    Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      {
        text: "취소",
        style: "cancel",
      },
      {
        text: "로그아웃",
        style: "destructive",
        onPress: async () => {
          try {
            await kakaoLogout();
            console.log("로그아웃 완료");
            //온보딩으로 이동
            navigation.replace("Onboarding");
          } catch (error) {
            console.error("로그아웃 처리 오류:", error);
          }
        },
      },
    ]);
  };

  //탈퇴
  const handleUnlink = (): void => {
    Alert.alert(
      "계정 탈퇴",
      "정말 탈퇴하시겠습니까?\n모든 데이터가 삭제되며 복구할 수 없습니다.",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "탈퇴",
          style: "destructive",
          onPress: async () => {
            try {
              const success = await kakaoUnlink();
              if (success) {
                console.log("계정 탈퇴 완료");
                Alert.alert("탈퇴 완료", "계정 탈퇴가 완료되었습니다.", [
                  {
                    text: "확인",
                    onPress: () => {
                      //온보딩으로 이동
                      navigation.replace("Onboarding");
                    },
                  },
                ]);
              }
            } catch (error) {
              console.error("계정 탈퇴 처리 오류:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <CustomText variant="body1" style={styles.title}>
        내 계정 관리
      </CustomText>

      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <CustomText variant="body2">로그아웃</CustomText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleUnlink}>
        <CustomText variant="body2" style={styles.deleteText}>
          계정탈퇴
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.Border_disabled,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  title: {
    marginBottom: 12,
  },
  menuItem: {
    paddingVertical: 10,
  },
  deleteText: {
    color: colors.red,
  },
});
