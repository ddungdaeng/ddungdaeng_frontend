import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  LayoutChangeEvent,
} from "react-native";
import CustomText from "../common/CustomText";
import colors from "../../styles/colors";

type GoalWeightProgressProps = {
  first: number;
  goal: number;
  current: number;
};

export default function GoalWeightProgress({
  first,
  goal,
  current,
}: GoalWeightProgressProps) {
  const [barWidth, setBarWidth] = useState(0);
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const progress = (first - current) / (first - goal);
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const percentage = Math.round(clampedProgress * 100);

  useEffect(() => {
    if (barWidth === 0) return;
    Animated.timing(animatedWidth, {
      toValue: clampedProgress * barWidth,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.out(Easing.cubic), //끝맺음 애니메이션
    }).start();
  }, [barWidth, clampedProgress]);

  const onBarLayout = (e: LayoutChangeEvent) => {
    setBarWidth(e.nativeEvent.layout.width);
  };

  return (
    <View style={styles.wrapper}>
      {/* 상단 레이블 */}
      <View style={styles.labels}>
        <CustomText w="medium" style={styles.label}>
          {first}kg
        </CustomText>
        <CustomText w="medium" style={styles.label}>
          {goal}kg
        </CustomText>
      </View>

      {/* 프로그레스 바 */}
      <View style={styles.progressBackground} onLayout={onBarLayout}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: animatedWidth,
              borderTopRightRadius: clampedProgress === 1 ? 12 : 0,
              borderBottomRightRadius: clampedProgress === 1 ? 12 : 0,
            },
          ]}
        >
          <CustomText w="bold" style={styles.percentText}>
            {percentage}%
          </CustomText>
        </Animated.View>
      </View>

      {/* 현재값 */}
      <CustomText w="medium" style={styles.currentText}>
        {current}kg
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: colors.black,
  },
  progressBackground: {
    flexDirection: "row",
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E5E5E5",
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
  },
  progressFill: {
    backgroundColor: colors.black,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  percentText: {
    color: colors.white,
    fontSize: 12,
    paddingHorizontal: 8,
  },
  currentText: {
    fontSize: 12,
    color: colors.gray2,
    marginTop: 4,
  },
});
