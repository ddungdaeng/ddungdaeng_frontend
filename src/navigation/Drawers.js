import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TopTabs from "./TopTabs";
import Settings from "../screens/Settings";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import Mypage from "../screens/Mypage";
import FamilyMemberManagement from "../screens/FamilyMemberManagement";
import HealthReportCollection from "../screens/HealthReportCollection";
import DogProfileManagement from "../screens/DogProfileManagement";

const Drawer = createDrawerNavigator();

const Drawers = () => {
  const Header = ({ navigation }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>LOGO</Text>

        <View style={styles.rightIcons}>
          {/*알람*/}
          <TouchableOpacity>
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
        options={{ title: "홈", drawerItemStyle: { display: "none" } // 드로어에서 숨김 
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
    fontWeight: "bold",
    color: colors.primary1,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
});
