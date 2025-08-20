import { NavigatorScreenParams } from "@react-navigation/native";

// TopTab 파라미터
export type TopTabParamList = {
  대시보드: undefined;
  상세: undefined;
  변화: undefined;
};

// Drawer 파라미터
export type DrawerParamList = {
  TopTabs: NavigatorScreenParams<TopTabParamList> | undefined;
  DogProfileManagement: undefined;
  FamilyMemberManagement: undefined;
  HealthReportCollection: undefined;
  Mypage: undefined;
  Settings: undefined;
};

// Root Stack 파라미터
export type RootStackParamList = {
  // 온보딩 플로우
  Onboarding: undefined;
  KaKaoLoginWebview: undefined;
  KaKaoLoginRedirect: undefined;
  DogRegistration: undefined;

  // 메인 앱
  Main: NavigatorScreenParams<DrawerParamList> | undefined;

  // 모달/디테일 화면들
  HealthReportDetail: {
    reportId?: string;
    title: string;
    averageWeight: number;
    feedingAmount: number;
    treatAmount: number;
    walkingRate: number;
  };
};

export interface NavigationProp {
  replace: (routeName: string) => void;
  navigate: (routeName: string) => void;
}
