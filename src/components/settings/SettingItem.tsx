import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";

import { PADDING } from "../../constants/constants";
import CustomText from "../common/CustomText";
import colors from "../../styles/colors";

import Right from "../../assets/ic-right.svg";

interface ToggleItemProps {
  title: string;
  type: "toggle"; //literal 타입으로
  value: boolean;
  onToggle: (val: boolean) => void;
}
interface NavigateItemProps {
  title: string;
  type?: "navigate";
  onPress: () => void;
}
export type SettingsItemProps = ToggleItemProps | NavigateItemProps; //SettingsSection으로 보냄

//todo: 토글 크기 조정하기 -> 흠.. width,height으로 수정하면 그림자가 수정이 안됨..
export default function SettingsItem(props: SettingsItemProps) {
  const { title } = props;

  return (
    <View style={styles.container}>
      <CustomText variant="sub2" style={styles.title}>
        {title}
      </CustomText>
      {props.type === "toggle" ? (
        <Switch
          value={props.value}
          onValueChange={props.onToggle}
          trackColor={{ true: colors.primary1, false: colors.Icon_disabled }}
          ios_backgroundColor={colors.Icon_disabled}
          thumbColor={colors.white}
        />
      ) : (
        <TouchableOpacity onPress={props.onPress}>
          <Right />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    color: colors.Text_sub,
  },
});
