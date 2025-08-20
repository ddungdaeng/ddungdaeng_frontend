import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import colors from "../../styles/colors";
import CustomText from "./CustomText";
import { PADDING } from "../../constants/constants";

export default function Header() {
  const navigation = useNavigation<any>();

  const goAlert = () => Alert.alert("알람입니당~");
  const goToDashboard = () => {
    navigation.navigate("TopTabs", {
      screen: "대시보드",
    });
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goToDashboard}>
        <CustomText w="bold" style={styles.title}>
          LOGO
        </CustomText>
      </TouchableOpacity>

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={goAlert} style={styles.icons}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.icons}
        >
          <Ionicons name="menu" size={28} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.white,
    paddingLeft: PADDING,
    paddingRight: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    color: colors.primary1,
    paddingVertical: 10,
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
