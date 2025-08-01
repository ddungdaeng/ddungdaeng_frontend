import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

import colors from "../styles/colors";
import CustomText from "../components/common/CustomText";

import MainCharacter from "../assets/character.svg";
import FatCharacter from "../assets/fatCharacter.svg";
import SadCharacter from "../assets/sadCharacter.svg";
import DdungdaengTypo from "../assets/ddungdaeng.svg";
import KakaoIcon from "../assets/ic-kakao.svg";

interface NavigationProp {
  replace: (routeName: string) => void;
}
interface OnboardingProps {
  navigation: NavigationProp;
}

//todo: 스타일 수정
const Onboarding: React.FC<OnboardingProps> = ({ navigation }) => {
  const swiper = useRef<Swiper>(null);
  const [currIndex, setCurrIndex] = useState<number>(0);

  const handleNext = (): void => {
    // 마지막 전까지는 다음 슬라이드로 이동
    if (currIndex < 4) {
      swiper.current?.scrollBy(1, true);
    }
  };

  const handleKakaoLogin = (): void => {
    navigation.replace("Main");
  };

  return (
    <View style={styles.wrapper}>
      {/* 커스텀 페이지네이션 상단 배치 */}
      <View style={styles.customPagination}>
        {[0, 1, 2, 3, 4].map((index: number) => (
          <View
            key={index}
            style={[
              styles.dot,
              currIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <Swiper
        ref={swiper}
        loop={false}
        showsPagination={false} // 기본 페이지네이션 숨김
        onIndexChanged={setCurrIndex}
      >
        <View style={styles.container}>
          <MainCharacter width={193} height={193} />
          <DdungdaengTypo style={{ marginTop: 8 }} />
        </View>
        <View style={styles.container}>
          <CustomText w="bold" style={styles.text}>
            언제 이렇게 살이쪘지?
          </CustomText>
          <FatCharacter width={230} height={230} />
        </View>
        <View style={styles.container}>
          <CustomText w="bold" style={styles.text}>
            관리하긴 해야하는데..{"\n"}매번 잊고, 꾸준하게 하기 어렵네
          </CustomText>
          <SadCharacter width={200} height={296.49} />
        </View>
        <View style={styles.container}>
          <CustomText w="bold" style={styles.text}>
            이젠 뚱댕이와{"\n"}함께 편하게 관리해요!
          </CustomText>
        </View>
        <View style={styles.container}>
          <MainCharacter width={193} height={193} />
          <DdungdaengTypo style={{ marginTop: 8 }} />
        </View>
      </Swiper>

      {currIndex < 4 ? (
        <View style={styles.bottomButtonWrap}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <CustomText w="bold" style={styles.nextButtonText}>
              다음
            </CustomText>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bottomButtonWrap}>
          <TouchableOpacity
            style={styles.lastButton}
            onPress={handleKakaoLogin}
          >
            <KakaoIcon />
            <CustomText w="bold" style={styles.lastButtonText}>
              카카오 로그인
            </CustomText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  // 커스텀 페이지네이션 스타일
  customPagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 46, // 상단 위치
    left: 0,
    right: 0,
    zIndex: 10, // 다른 요소들 위에 표시
    height: 8,
  },
  dot: {
    borderRadius: 4,
    marginHorizontal: 5, //도트 간격
  },
  activeDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.primary1,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: colors.gray4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    color: colors.gray1,
    fontSize: 24,
    textAlign: "center",
  },
  bottomButtonWrap: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 23,
  },
  nextButton: {
    width: "100%",
    backgroundColor: colors.primary1,
    borderRadius: 10,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 20,
  },
  lastButton: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FEE500",
    borderRadius: 10,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
  },
  lastButtonText: {
    color: colors.gray1,
    fontSize: 18,
    marginLeft: 122,
    marginRight: 92,
  },
});

export default Onboarding;
