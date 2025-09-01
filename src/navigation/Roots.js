import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { initializeKakaoSDK } from "@react-native-kakao/core";
import { checkAuthStatus } from "../services/AuthService";

import colors from "../styles/colors";

import Drawers from "./Drawers";
import Onboarding from "../screens/Onboarding";
import DogRegistration from "../screens/DogRegistration";
import HealthReportDetail from "../screens/drawers/HealthReportDetail";
import Inquiry from "../screens/settings/Inquiry";
import Feedback from "../screens/settings/Feedback";
import Terms from "../screens/settings/Terms";
import Privacy from "../screens/settings/Privacy";
import License from "../screens/settings/License";

const RootStack = createNativeStackNavigator();

export default function Root() {
  // 상태 관리
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //나중에 AsyncStorage나 상태관리로 체크
  const hasDogRegistered = false; // 반려견 등록 여부

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // 1. 카카오 SDK 초기화
      await initializeKakaoSDK(process.env.EXPO_PUBLIC_APP_KEY);

      // 2. 인증 상태 확인
      const authStatus = await checkAuthStatus();
      setIsAuthenticated(authStatus);

      console.log("앱 초기화 완료, 인증 상태:", authStatus);
    } catch (error) {
      console.error("앱 초기화 오류:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // 초기 화면 결정 로직
  const getInitialRouteName = () => {
    if (isAuthenticated && hasDogRegistered) {
      return "Main";
    } else if (isAuthenticated && !hasDogRegistered) {
      return "DogRegistration";
    } else {
      return "Onboarding"; // 인증되지 않은 사용자는 온보딩부터
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right", //전환 애니메이션
        }}
        initialRouteName={getInitialRouteName()}
      >
        {/* 온보딩 플로우 */}
        <RootStack.Group>
          <RootStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              gestureEnabled: false, // 뒤로가기 제스처 비활성화
            }}
          />
          <RootStack.Screen
            name="DogRegistration"
            component={DogRegistration}
            options={{
              gestureEnabled: false, // 등록 중 뒤로가기 방지
            }}
          />
        </RootStack.Group>

        {/* 메인 앱 */}
        <RootStack.Screen
          name="Main"
          component={Drawers}
          options={{
            gestureEnabled: false, // 메인에서 온보딩으로 돌아가지 않도록
          }}
        />

        {/* 모달/디테일 화면들 */}
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen
            name="HealthReportDetail"
            component={HealthReportDetail}
            options={{
              headerShown: true,
              headerTitle: "건강 리포트 상세",
              headerBackTitle: "뒤로",
            }}
          />

          {/* 설정 화면들 */}
          <RootStack.Screen
            name="Inquiry"
            component={Inquiry}
            options={{
              headerShown: true,
              headerTitle: "문의하기",
              headerBackTitle: "뒤로",
            }}
          />
          <RootStack.Screen
            name="Feedback"
            component={Feedback}
            options={{
              headerShown: true,
              headerTitle: "피드백 보내기",
              headerBackTitle: "뒤로",
            }}
          />
          <RootStack.Screen
            name="Terms"
            component={Terms}
            options={{
              headerShown: true,
              headerTitle: "이용약관",
              headerBackTitle: "뒤로",
            }}
          />
          <RootStack.Screen
            name="Privacy"
            component={Privacy}
            options={{
              headerShown: true,
              headerTitle: "개인정보 처리방침",
              headerBackTitle: "뒤로",
            }}
          />
          <RootStack.Screen
            name="License"
            component={License}
            options={{
              headerShown: true,
              headerTitle: "오픈소스 라이선스",
              headerBackTitle: "뒤로",
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </SafeAreaView>
  );
}
