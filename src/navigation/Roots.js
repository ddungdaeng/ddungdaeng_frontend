import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../styles/colors";
import Drawers from "./Drawers";
import Onboarding from "../screens/Onboarding";
import DogRegistration from "../screens/DogRegistration";
import HealthReportDetail from "../screens/drawers/HealthReportDetail";
import KaKaoLoginWebview from "../components/login/KaKaoLoginWebview";

const RootStack = createNativeStackNavigator();

export default function Root() {
  //나중에 AsyncStorage나 상태관리로 체크
  const isFirstLaunch = true; // 첫 실행 여부
  const hasDogRegistered = false; // 반려견 등록 여부

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right", //전환 애니메이션
        }}
        // 초기 화면 결정 로직
        initialRouteName={
          !isFirstLaunch && hasDogRegistered ? "MainApp" : "Onboarding"
        }
      >
        {/* 온보딩 플로우 */}
        {/* <RootStack.Group>
          <RootStack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              gestureEnabled: false, // 뒤로가기 제스처 비활성화
            }}
          />
          <RootStack.Screen
            name="KaKaoLoginWebview"
            component={KaKaoLoginWebview}
            options={{
              gestureEnabled: true,
              headerShown: false,
              headerTitle: "카카오 로그인",
              headerBackTitle: "뒤로",
            }}
          />
          <RootStack.Screen
            name="DogRegistration"
            component={DogRegistration}
            options={{
              gestureEnabled: false, // 등록 중 뒤로가기 방지
            }}
          />
        </RootStack.Group> */}

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
          {/* 추가 모달 화면들을 여기에 */}
        </RootStack.Group>
      </RootStack.Navigator>
    </SafeAreaView>
  );
}
