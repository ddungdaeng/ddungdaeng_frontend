import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TopTabs from "./TopTabs";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";

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
        options={{ title: "홈" }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "설정" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ title: "프로필" }}
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
