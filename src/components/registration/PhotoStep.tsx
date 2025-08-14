import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  launchImageLibrary,
  ImagePickerResponse,
  MediaType,
} from "react-native-image-picker";
import colors from "../../styles/colors";
import Camera from "../../assets/ic-camera.svg";

interface PhotoStepProps {
  value: string;
  isActive: boolean;
  onPhotoSelected: (uri: string) => void;
}

export const PhotoStep: React.FC<PhotoStepProps> = ({
  value,
  isActive,
  onPhotoSelected,
}) => {
  const handleImagePicker = () => {
    // 활성 상태가 아니어도 사진 변경 가능하도록 수정
    const options = {
      mediaType: "photo" as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorMessage) {
        return;
      }

      if (response.assets?.[0]?.uri) {
        onPhotoSelected(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isActive && styles.activeButton]}
        onPress={handleImagePicker} // 항상 클릭 가능
      >
        {value ? (
          <Image source={{ uri: value }} style={styles.image} />
        ) : (
          <Camera />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.Border_disabled,
    borderWidth: 1,
    borderColor: colors.Border_default,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  activeButton: {
    borderColor: colors.primary1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});
