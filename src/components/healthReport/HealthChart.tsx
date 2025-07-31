import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

interface ChartItemProps {
  label: string;
  changeText: string;
  currentValue: string;
  goalValue: string;
  progress: number; // 0-1 사이의 값
  barColor: string;
}

const ChartItem = ({
  label,
  changeText,
  currentValue,
  goalValue,
  progress,
  barColor,
}: ChartItemProps) => {
  return (
    <View style={styles.itemContainer}>
      {/* 왼쪽 라벨 영역 */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.changeText}>{changeText}</Text>
      </View>

      {/* 오른쪽 차트 영역 */}
      <View style={styles.chartContainer}>
        <View style={styles.barBackground}>
          <View
            style={[
              styles.barFill,
              {
                width: `${progress * 100}%`,
                backgroundColor: barColor,
              },
            ]}
          />
        </View>
        <View style={styles.valuesContainer}>
          <Text style={styles.currentValue}>{currentValue}</Text>
          <Text style={styles.goalValue}>{goalValue}</Text>
        </View>
      </View>
    </View>
  );
};

interface HealthChartProps {
  style?: any;
}

export default function HealthChart({ style }: HealthChartProps) {
  const chartData = [
    {
      label: "체중",
      changeText: "-0.3kg",
      currentValue: "7.0kg",
      goalValue: "6.5kg",
      progress: 0.65,
      barColor: "#BCFFFE",
    },
    {
      label: "산책",
      changeText: "+1회",
      currentValue: "4회",
      goalValue: "6회",
      progress: 0.67,
      barColor: "#FF9C9C",
    },
    {
      label: "식사",
      changeText: "100g",
      currentValue: "100g",
      goalValue: "85g",
      progress: 0.85,
      barColor: "#FF9C9C",
    },
    {
      label: "간식",
      changeText: "3회",
      currentValue: "3회",
      goalValue: "6회",
      progress: 0.5,
      barColor: "#BCFFFE",
    },
    {
      label: "루틴율",
      changeText: "71%",
      currentValue: "0%",
      goalValue: "100%",
      progress: 0.71,
      barColor: "#BCFFFE",
    },
    {
      label: "목표진행",
      changeText: "71%",
      currentValue: "0%",
      goalValue: "목표 달성까지",
      progress: 0.71,
      barColor: "#BCFFFE",
    },
  ];

  return (
    <View style={[styles.container, style]}>
      {chartData.map((item, index) => (
        <ChartItem
          key={index}
          label={item.label}
          changeText={item.changeText}
          currentValue={item.currentValue}
          goalValue={item.goalValue}
          progress={item.progress}
          barColor={item.barColor}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 55,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12, //차트들 사이 간격
    paddingHorizontal: 0, // 좌우 마진 제거
  },
  labelContainer: {
    width: 80, // 라벨 영역 고정 너비
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray1,
    marginBottom: 4,
  },
  changeText: {
    fontSize: 10,
    color: colors.gray2,
  },
  chartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  barBackground: {
    height: 20, //바 높이
    backgroundColor: colors.gray4,
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  valuesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  currentValue: {
    fontSize: 10,
    color: colors.gray1,
  },
  goalValue: {
    fontSize: 10,
    color: colors.gray1,
  },
});
