//KakaoAuthUrl로 이동하는 페이지 (로그인 버튼 눌렀을 때 이동하는 페이지)
import { StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "../../types/navigation";
import colors from "../../styles/colors";
import WebView from "react-native-webview";

interface KaKaoLoginWebviewProps {
  navigation: NavigationProp;
}

export default function KaKaoLoginWebview({
  navigation,
}: KaKaoLoginWebviewProps) {
  const REST_API_KEY = process.env.EXPO_PUBLIC_REST_API_KEY;
  const REDIRECT_URI = process.env.EXPO_PUBLIC_REDIRECT_URI;
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <View style={styles.container}>
      {/* 인가코드 추출 */}
      <WebView
        source={{ uri: KAKAO_AUTH_URI }}
        onNavigationStateChange={(e) => {
          if (e.url.startsWith(REDIRECT_URI)) {
            const code = e.url.split("code=")[1];
            navigation.navigate("KaKaoLoginRedirect", { token: code });
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
