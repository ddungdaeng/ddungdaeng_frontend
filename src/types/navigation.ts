export type RootStackParamList = {
  // 온보딩 플로우
  Onboarding: undefined;
  KakaoLogin: undefined;
  DogRegistration: undefined;

  // 메인 앱 (Drawer/Tab 네비게이션)
  Main:
    | {
        screen?: string;
        params?: any;
      }
    | undefined;

  // 모달/디테일 화면들
  HealthReportDetail: {
    title: string;
    averageWeight: number;
    feedingAmount: number;
    treatAmount: number;
    walkingRate: number;
  };

  // 추가 화면들...
};

export type DrawerParamList = {
  TopTabs: undefined;
  DogProfileManagement: undefined;
  HealthReportCollection: undefined;
  // 다른 Drawer 스크린들...(아직..)
};

export type StackParamList = {
  HealthReportDetail: { title: string };
  // 다른 Stack 스크린들 추가.. (아직..)
};

export interface NavigationProp {
  replace: (routeName: string) => void;
  navigate: (routeName: string) => void;
}
