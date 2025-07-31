import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TopTabs from "./TopTabs";
import CustomText from "../components/common/CustomText";
import colors from "../styles/colors";

import Mypage from "../screens/drawers/Mypage";
import Settings from "../screens/drawers/Settings";
import FamilyMemberManagement from "../screens/drawers/FamilyMemberManagement";
import HealthReportCollection from "../screens/drawers/HealthReportCollection";
import DogProfileManagement from "../screens/drawers/DogProfileManagement";

const Drawer = createDrawerNavigator();

const Drawers = () => {
  const goAlert = () => Alert.alert("알람입니당~");

  const Header = ({ navigation }) => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TopTabs", { screen: "대시보드" })}
        >
          <CustomText w="bold" style={styles.title}>
            LOGO
          </CustomText>
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          {/*알람*/}
          <TouchableOpacity onPress={goAlert}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          {/*햄버거바*/}
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="menu" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      initialRouteName="TopTabs" //앱 실행 시 처음으로 보여줄 스크린을 TopTabs으로 지정
      screenOptions={({ navigation }) => ({
        header: () => <Header navigation={navigation} />,
        drawerPosition: "right",
        drawerActiveTintColor: "white", //선택된 항목의 글씨 색상
        drawerActiveBackgroundColor: colors.gray3,
        drawerLabelStyle: {
          color: "black", //기본 글씨 색상
        },
      })}
    >
      <Drawer.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          title: "홈",
          drawerItemStyle: { display: "none" }, // 드로어에서 숨김
        }}
      />
      <Drawer.Screen
        name="DogProfileManagement"
        component={DogProfileManagement}
        options={{ title: "반려견 프로필 관리" }}
      />
      <Drawer.Screen
        name="FamilyMemberManagement"
        component={FamilyMemberManagement}
        options={{ title: "가족 구성원 관리" }}
      />
      <Drawer.Screen
        name="HealthReportCollection"
        component={HealthReportCollection}
        options={{ title: "건강 리포트 모아보기" }}
      />
      <Drawer.Screen
        name="Mypage"
        component={Mypage}
        options={{ title: "마이페이지" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "설정" }}
      />
    </Drawer.Navigator>
  );
};

export default Drawers;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    color: colors.primary1,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
