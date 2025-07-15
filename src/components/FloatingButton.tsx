import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import colors from "../colors";
import Write from "../assets/ic-write.svg";
import Cancel from "../assets/ic-cancel.svg";

export default function FloatingButton({
  onPress,
  isMenuOpen,
}: {
  onPress: () => void;
  isMenuOpen: boolean;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
    bottom: 92,
    right: 23,
    width: 64,
    height: 64,
    borderRadius: 10,
    backgroundColor: colors.black,
  },
});
