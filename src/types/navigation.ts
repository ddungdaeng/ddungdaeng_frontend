export type RootStackParamList = {
  Main: {
    screen: string;
  };
  Stack: {
    screen: string;
    params?: { title: string } | undefined;
  };
};

export type DrawerParamList = {
  HealthReportCollection: undefined;
  // 다른 Drawer 스크린들...
};

export type StackParamList = {
  HealthReportDetail: { title: string };
  // 다른 Stack 스크린들 추가..
};
