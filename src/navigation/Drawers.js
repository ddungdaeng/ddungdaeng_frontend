import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";

import { PADDING } from "../constants/constants";
import colors from "../styles/colors";
import Left from "../assets/ic-left.svg";

import TopTabs from "./TopTabs";
import Mypage from "../screens/drawers/Mypage";
import Settings from "../screens/drawers/Settings";
import FamilyMemberManagement from "../screens/drawers/FamilyMemberManagement";
import HealthReportCollection from "../screens/drawers/HealthReportCollection";
import DogProfileManagement from "../screens/drawers/DogProfileManagement";

const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TopTabs"
      screenOptions={({ navigation, route }) => ({
        headerShown: route.name !== "TopTabs",
        headerTitle: "",
        headerStatusBarHeight: 0, //상태바 높이를 0으로
        headerStyle: {
          height: 48,
          elevation: 0,
          shadowOpacity: 0,
        },

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginLeft: 14,
              paddingHorizontal: 10,
              paddingTop: 20,
            }}
          >
            <Left />
          </TouchableOpacity>
        ),
        headerRight: () => null, //Drawer 아이콘 제거
        // Drawer 설정
        drawerPosition: "right",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: colors.gray3,
        drawerLabelStyle: {
          color: colors.Text_default,
        },
      })}
    >
      <Drawer.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          title: "홈",
          drawerItemStyle: { display: "none" },
        }}
      />

      <Drawer.Screen
        name="DogProfileManagement"
        component={DogProfileManagement}
        options={{
          title: "반려견 프로필 관리",
        }}
      />
      <Drawer.Screen
        name="FamilyMemberManagement"
        component={FamilyMemberManagement}
        options={{
          title: "가족 구성원 관리",
        }}
      />
      <Drawer.Screen
        name="HealthReportCollection"
        component={HealthReportCollection}
        options={{
          title: "건강 리포트 모아보기",
        }}
      />
      <Drawer.Screen
        name="Mypage"
        component={Mypage}
        options={{
          title: "마이페이지",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "설정",
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawers;
