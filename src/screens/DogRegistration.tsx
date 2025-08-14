import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../styles/colors";
import CustomText from "../components/common/CustomText";
import { useDogRegistrationStore } from "../stores/dogRegistrationStore";
import { TextInputStep } from "../components/registration/TextInputStep";
import { DropdownStep } from "../components/registration/DropdownStep";
import { PhotoStep } from "../components/registration/PhotoStep";
import { REGISTRATION_STEPS } from "../constants/registrationSteps";
import { PADDING } from "../constants/constants";
import { NavigationProp } from "../types/navigation";

interface DogRegistrationProps {
  navigation: NavigationProp;
}

//todo: 애니메이션 추가
export default function DogRegistration({ navigation }: DogRegistrationProps) {
  const { dogInfo, currentStep, updateDogInfo, nextStep, getVisibleSteps } =
    useDogRegistrationStore();

  const scrollViewRef = useRef<ScrollView>(null);
  const stepAnimations = useRef<{ [key: number]: Animated.Value }>({});

  const currentStepConfig = REGISTRATION_STEPS[currentStep];
  const visibleSteps = getVisibleSteps();
  const isLastStep = currentStep === REGISTRATION_STEPS.length - 1;

  // 입력값이 유효한지 확인하는 간단한 함수
  const canProceed = () => {
    const value = dogInfo[currentStepConfig.key];
    return value.trim().length > 0;
  };

  // 새로운 단계가 추가될 때 애니메이션 초기화
  useEffect(() => {
    console.log("visibleSteps:", visibleSteps);

    visibleSteps.forEach((stepIndex, index) => {
      if (!stepAnimations.current[stepIndex]) {
        console.log("애니메이션 초기화 for step:", stepIndex);

        // 새로운 단계는 0에서 시작 (투명하고 위에서 시작)
        stepAnimations.current[stepIndex] = new Animated.Value(
          stepIndex === currentStep ? 0 : 1
        );

        // 현재 단계인 경우 페이드인 + 슬라이드 애니메이션
        if (stepIndex === currentStep) {
          console.log("현재 단계 애니메이션 실행:", stepIndex);
          Animated.spring(stepAnimations.current[stepIndex], {
            toValue: 1,
            friction: 8,
            tension: 40,
            useNativeDriver: true,
          }).start();
        }
      }
    });
  }, [visibleSteps, currentStep]);

  // 새로운 단계로 넘어갈 때 맨 위로 스크롤
  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, [currentStep]);

  const handleInputComplete = () => {
    console.log("handleInputComplete 호출");
    console.log("현재 값:", dogInfo[currentStepConfig.key]);
    console.log("canProceed:", canProceed());

    if (canProceed()) {
      nextStep();
    }
  };

  // 드롭다운 선택 핸들러 - 현재 단계와 완료된 단계 구분
  const handleDropdownSelect = (value: string, stepIndex: number) => {
    const step = REGISTRATION_STEPS[stepIndex];
    updateDogInfo(step.key, value);

    // 현재 단계일 때만 다음 단계로 이동
    if (stepIndex === currentStep) {
      setTimeout(nextStep, 200);
    }
  };

  // 사진 선택 핸들러 - 현재 단계와 완료된 단계 구분
  const handlePhotoSelected = (uri: string, stepIndex: number) => {
    const step = REGISTRATION_STEPS[stepIndex];
    const previousValue = dogInfo[step.key];

    // 값 업데이트
    updateDogInfo(step.key, uri);

    // 현재 단계이고 이전에 값이 없었을 때만 다음 단계로 이동
    if (stepIndex === currentStep && !previousValue) {
      setTimeout(nextStep, 200);
    }
    // 이미 값이 있는 경우(완료된 단계에서 수정)는 값만 업데이트
  };

  const handleComplete = () => {
    console.log("반려견 등록 완료:", dogInfo);
    //fix: navigation 조건 추가하기
    navigation.replace("Main");

    // API 호출 등 실제 등록 로직 구현
  };

  const renderStep = (stepIndex: number, arrayIndex: number) => {
    const step = REGISTRATION_STEPS[stepIndex];
    const isCurrentStep = stepIndex === currentStep;
    const animatedValue =
      stepAnimations.current[stepIndex] || new Animated.Value(1);

    console.log("renderStep 호출:", stepIndex, "현재단계:", currentStep);

    const commonProps = {
      step,
      value: dogInfo[step.key],
      isActive: isCurrentStep,
    };

    let stepComponent;
    switch (step.type) {
      case "text":
        stepComponent = (
          <TextInputStep
            {...commonProps}
            onChangeText={(value) => updateDogInfo(step.key, value)}
            onComplete={handleInputComplete}
          />
        );
        break;
      case "dropdown":
        stepComponent = (
          <DropdownStep
            {...commonProps}
            // 모든 단계에서 선택 가능하도록 수정
            onSelect={(value) => handleDropdownSelect(value, stepIndex)}
          />
        );
        break;
      case "photo":
        stepComponent = (
          <PhotoStep
            {...commonProps}
            // 모든 단계에서 선택 가능하도록 수정
            onPhotoSelected={(uri) => handlePhotoSelected(uri, stepIndex)}
          />
        );
        break;
      default:
        stepComponent = null;
    }

    return (
      <Animated.View
        key={`step-${stepIndex}-${arrayIndex}`}
        style={[
          styles.stepWrapper,
          {
            opacity: animatedValue,
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0],
                }),
              },
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.95, 1],
                }),
              },
            ],
          },
        ]}
      >
        {stepComponent}
      </Animated.View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* 단계 제목 */}
        <View style={styles.titleContainer}>
          <CustomText variant="title1" style={styles.stepTitle}>
            {currentStepConfig.title}
          </CustomText>
          <CustomText variant="body1" style={styles.stepProgress}>
            {currentStep + 1}/{REGISTRATION_STEPS.length}
          </CustomText>
        </View>

        {/* 단계별 입력 컴포넌트들 */}
        <View style={styles.stepsContainer}>
          {visibleSteps.map((stepIndex, arrayIndex) =>
            renderStep(stepIndex, arrayIndex)
          )}
        </View>
      </ScrollView>

      {isLastStep && dogInfo.photo && (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={handleComplete}
        >
          <CustomText variant="sub2" style={styles.buttonText}>
            등록 완료
          </CustomText>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: PADDING,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  stepTitle: {
    color: colors.Text_default,
    flex: 1,
  },
  stepProgress: {
    color: colors.Text_sub,
  },
  stepsContainer: {
    flex: 1,
    marginTop: 20,
  },
  stepWrapper: {
    marginBottom: 12,
  },
  completeButton: {
    backgroundColor: colors.primary1,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
  },
});
