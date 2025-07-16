import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import colors from "../../colors";
import Write from "../../assets/ic-write.svg";
import Cancel from "../../assets/ic-cancel.svg";
import shadows from "../../shadow";

export default function FloatingButton({
  onPress,
  isMenuOpen,
}: {
  onPress: () => void;
  isMenuOpen: boolean;
}) {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity style={[styles.button, {bottom: insets.bottom + 30}]} onPress={onPress}>
      {isMenuOpen ? (
        <Cancel width={17.5} height={17.5} />
      ) : (
        <Write width={24} height={24} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 23,
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: colors.black,

    //그림자 있어도 이쁠듯
    ...shadows.light
  },
});
