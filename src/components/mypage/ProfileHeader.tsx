import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../common/CustomText";

import Edit from "../../assets/ic-edit.svg";
import colors from "../../styles/colors";

interface ProfileHeaderProps {
  profileImage: string;
  name: string;
  petName: string;
  onEditPress: () => void;
}

export default function ProfileHeader({
  profileImage,
  name,
  petName,
  onEditPress,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <CustomText variant="sub1" style={styles.name}>
        {name}
      </CustomText>
      <View style={styles.petNameContainer}>
        <CustomText variant="sub3" style={styles.petNameText}>
          {petName} 견주
        </CustomText>
        <TouchableOpacity onPress={onEditPress}>
          <Edit />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary1,
    marginBottom: 14,
  },
  name: {
    color: colors.Text_default,
    marginBottom: 4,
  },
  petNameContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  petNameText: {
    color: colors.Text_sub,
    marginRight: 5,
  },
  editIcon: {
    fontSize: 16,
  },
});
