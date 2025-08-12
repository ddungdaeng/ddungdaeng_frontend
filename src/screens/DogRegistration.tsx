import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { NavigationProp } from "../types/navigation";
import { DOG_BREEDS, ERROR_MESSAGES, PADDING } from "../constants";
import Dropdown from "../components/dogRegistration/Dropdown";
import colors from "../styles/colors";
import CustomText from "../components/common/CustomText";

interface DogRegistrationProps {
  navigation: NavigationProp;
}

const DogRegistration = ({ navigation }: DogRegistrationProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dogData, setDogData] = useState({
    name: "",
    breed: "",
    gender: "",
    age: 0,
    isNeutered: null,
    photo: null,
  });

  const [breedDropdownOpen, setBreedDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // 입력 데이터 업데이트
  const updateDogData = (field: string, value: any) => {
    setDogData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // 입력시 에러 제거
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  // 다음 단계로 이동
  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
      } else {
        // 마지막 단계에서 완료
        Alert.alert("등록 완료", "반려견 등록이 완료되었습니다!", [
          {
            text: "확인",
            onPress: () => {
              console.log("등록된 데이터:", dogData);
              navigation.replace("Main");
            },
          },
        ]);
      }
    }
  };

  // 이전 단계로 이동
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // 현재 단계 유효성 검사
  const validateCurrentStep = () => {
    let newErrors = {};
    let isValid = true;

    switch (currentStep) {
      case 1:
        if (!dogData.name.trim()) {
          newErrors.name = true;
          isValid = false;
        }
        break;
      case 2:
        if (!dogData.breed) {
          newErrors.breed = true;
          isValid = false;
        }
        break;
      case 3:
        if (!dogData.gender) {
          newErrors.gender = true;
          isValid = false;
        }
        break;
      case 4:
        if (dogData.age === 0 || dogData.age < 0) {
          newErrors.age = true;
          isValid = false;
        }
        break;
      case 5:
        if (dogData.isNeutered === null || dogData.isNeutered === undefined) {
          newErrors.isNeutered = true;
          isValid = false;
        }
        break;
      case 6:
        if (!dogData.photo) {
          newErrors.photo = true;
          isValid = false;
        }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 사진 선택
  const selectPhoto = () => {
    const options = {
      mediaType: "photo" as const,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel || response.error) {
        return;
      }

      if (response.assets && response.assets[0]) {
        updateDogData("photo", response.assets[0]);
      }
    });
  };

  // 프로그레스 바
  const renderProgressIndicator = () => {
    const progressPercent = (currentStep / 6) * 100;

    return (
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: `${progressPercent}%` }]}
          />
        </View>
        <CustomText style={styles.progressText}>{currentStep}/6</CustomText>
      </View>
    );
  };

  // 단계별 렌더링
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <CustomText w="bold" style={styles.stepTitle}>
              반려견의 이름을 작성해주세요
            </CustomText>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, errors.name && styles.errorInput]}
                placeholder="이름을 입력해주세요"
                placeholderTextColor={colors.gray3}
                value={dogData.name}
                onChangeText={(text) => updateDogData("name", text)}
                maxLength={20}
              />
              {errors.name && (
                <CustomText style={styles.errorText}>
                  {ERROR_MESSAGES.required}
                </CustomText>
              )}
            </View>
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <CustomText w="bold" style={styles.stepTitle}>
              반려견의 품종을 작성해주세요
            </CustomText>
            <View style={styles.inputContainer}>
              <Dropdown
                placeholder="품종을 선택해주세요"
                value={dogData.breed}
                onSelect={(breed) => {
                  updateDogData("breed", breed);
                  setBreedDropdownOpen(false);
                }}
                options={DOG_BREEDS}
                isOpen={breedDropdownOpen}
                onToggle={() => setBreedDropdownOpen(!breedDropdownOpen)}
                hasError={errors.breed}
              />
              {errors.breed && (
                <CustomText style={styles.errorText}>
                  {ERROR_MESSAGES.required}
                </CustomText>
              )}
            </View>
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <CustomText w="bold" style={styles.stepTitle}>
              반려견의 성별을 선택해주세요
            </CustomText>
            <View style={styles.inputContainer}>
              <View style={styles.optionContainer}>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    dogData.gender === "male" && styles.selectedButton,
                    errors.gender && !dogData.gender && styles.errorInput,
                  ]}
                  onPress={() => updateDogData("gender", "male")}
                >
                  <CustomText
                    style={[
                      styles.optionButtonText,
                      dogData.gender === "male" && styles.selectedButtonText,
                    ]}
                  >
                    수컷
                  </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    dogData.gender === "female" && styles.selectedButton,
                    errors.gender && !dogData.gender && styles.errorInput,
                  ]}
                  onPress={() => updateDogData("gender", "female")}
                >
                  <CustomText
                    style={[
                      styles.optionButtonText,
                      dogData.gender === "female" && styles.selectedButtonText,
                    ]}
                  >
                    암컷
                  </CustomText>
                </TouchableOpacity>
              </View>
              {errors.gender && (
                <CustomText style={styles.errorText}>
                  {ERROR_MESSAGES.required}
                </CustomText>
              )}
            </View>
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContainer}>
            <CustomText w="bold" style={styles.stepTitle}>
              반려견의 나이를 선택해주세요
            </CustomText>
            <View style={styles.inputContainer}>
              <View style={styles.ageContainer}>
                <TextInput
                  style={[styles.ageInput, errors.age && styles.errorInput]}
                  placeholder="0"
                  placeholderTextColor={colors.gray3}
                  value={dogData.age === 0 ? "" : dogData.age.toString()}
                  onChangeText={(text) => {
                    if (text === "") {
                      updateDogData("age", 0);
                    } else {
                      const numericValue = parseInt(text, 10) || 0;
                      updateDogData("age", numericValue);
                    }
                  }}
                  keyboardType="numeric"
                  maxLength={2}
                />
                <CustomText style={styles.ageUnit}>살</CustomText>
              </View>
              {errors.age && (
                <CustomText style={styles.errorText}>
                  {ERROR_MESSAGES.required}
                </CustomText>
              )}
            </View>
          </View>
        );

      case 5:
        return (
          <View style={styles.stepContainer}>
            <CustomText w="bold" style={styles.stepTitle}>
              반려견의 중성화 여부를 선택해주세요
            </CustomText>
            <View style={styles.inputContainer}>
              <View style={styles.optionContainer}>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    dogData.isNeutered === true && styles.selectedButton,
                    errors.isNeutered &&
                      dogData.isNeutered === null &&
                      styles.errorInput,
                  ]}
                  onPress={() => updateDogData("isNeutered", true)}
                >
                  <CustomText
                    style={[
                      styles.optionButtonText,
                      dogData.isNeutered === true && styles.selectedButtonText,
                    ]}
                  >
                    했어요
                  </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    dogData.isNeutered === false && styles.selectedButton,
                    errors.isNeutered &&
                      dogData.isNeutered === null &&
                      styles.errorInput,
                  ]}
                  onPress={() => updateDogData("isNeutered", false)}
                >
                  <CustomText
                    style={[
                      styles.optionButtonText,
                      dogData.isNeutered === false && styles.selectedButtonText,
                    ]}
                  >
                    안했어요
                  </CustomText>
                </TouchableOpacity>
              </View>
              {errors.isNeutered && (
                <CustomText style={styles.errorText}>
                  {ERROR_MESSAGES.required}
                </CustomText>
              )}
            </View>
          </View>
        );

      case 6:
        return (
          <View style={styles.stepContainer}>
            <CustomText w="bold" style={styles.stepTitle}>
              반려견의 사진을 첨부해주세요
            </CustomText>
            <View style={styles.photoContainer}>
              <TouchableOpacity
                style={[styles.photoButton, errors.photo && styles.errorPhoto]}
                onPress={selectPhoto}
              >
                {dogData.photo ? (
                  <Image
                    source={{ uri: dogData.photo.uri }}
                    style={styles.selectedPhoto}
                  />
                ) : (
                  <View style={styles.photoPlaceholder}>
                    <View style={styles.cameraIcon}>
                      <CustomText style={styles.cameraIconText}>📷</CustomText>
                    </View>
                    <CustomText style={styles.photoButtonText}>
                      사진 첨부하기
                    </CustomText>
                  </View>
                )}
              </TouchableOpacity>
              {errors.photo && (
                <CustomText style={styles.errorText}>
                  {ERROR_MESSAGES.required}
                </CustomText>
              )}
            </View>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* 프로그레스바 */}
      <View style={styles.headerContainer}>{renderProgressIndicator()}</View>

      {/* 스크롤 가능한 콘텐츠 */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {renderStep()}
      </ScrollView>

      {/* 하단 버튼들 */}
      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={prevStep}>
            <CustomText style={styles.backButtonText}>이전</CustomText>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[
            styles.nextButton,
            currentStep > 1 && styles.nextButtonWithBack,
          ]}
          onPress={nextStep}
        >
          <CustomText style={styles.nextButtonText}>
            {currentStep === 6 ? "등록하기" : "다음"}
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    paddingHorizontal: PADDING,
    paddingTop: PADDING,
  },
  // 프로그레스 바
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: colors.gray4,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary1,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: colors.gray2,
    fontWeight: "500",
    minWidth: 35,
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  stepContainer: {
    paddingVertical: 50,
    alignItems: "flex-start",
    minHeight: 300,
  },
  stepTitle: {
    fontSize: 20,
    color: colors.gray1,
    textAlign: "left",
    marginBottom: 30,
    lineHeight: 28,
  },
  inputContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: colors.white,
    color: colors.gray1,
  },
  // 에러 스타일
  errorInput: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  errorPhoto: {
    borderColor: colors.red,
  },
  // 옵션 버튼들
  optionContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 15,
  },
  optionButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  selectedButton: {
    backgroundColor: colors.primary1,
    borderColor: colors.primary1,
  },
  optionButtonText: {
    fontSize: 16,
    color: colors.gray2,
  },
  selectedButtonText: {
    color: colors.white,
    fontWeight: "500",
  },
  // 나이 입력
  ageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  ageInput: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: colors.white,
    color: colors.gray1,
  },
  ageUnit: {
    fontSize: 16,
    color: colors.gray1,
  },
  // 사진 버튼
  photoContainer: {
    width: "100%",
    alignItems: "center",
  },
  photoButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.gray4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: colors.gray5,
  },
  photoPlaceholder: {
    alignItems: "center",
  },
  cameraIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cameraIconText: {
    fontSize: 20,
  },
  photoButtonText: {
    fontSize: 12,
    color: colors.gray2,
    textAlign: "center",
  },
  selectedPhoto: {
    width: "100%",
    height: "100%",
  },
  // 하단 버튼들
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: PADDING,
    paddingVertical: 20,
    paddingBottom: 40,
    gap: 12,
  },
  backButton: {
    height: 50,
    backgroundColor: colors.gray5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    minWidth: 80,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.gray2,
    fontWeight: "500",
  },
  nextButton: {
    flex: 1,
    height: 50,
    backgroundColor: colors.primary1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonWithBack: {
    flex: 1,
  },
  nextButtonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "600",
  },
});

export default DogRegistration;
