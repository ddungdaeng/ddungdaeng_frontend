import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Polygon, Circle, Line, Text as SvgText } from "react-native-svg";
import { SCALE_FACTOR } from "../../constants";

interface RadarChartCardProps {
  data: number[];
  labels?: string[];
  size?: number;
  maxValue?: number;
  levels?: number;
  showDataPoints?: boolean;
  showDataStroke?: boolean;
  colors?: {
    grid?: string;
    gridText?: string;
    data?: string;
    dataFill?: string;
    labels?: string;
    black?: string;
  };
}

const RadarChartCard = ({
  data, // 기본값: [체중, 산책, 기록 참여도, 간식, 식사]
  labels = ["체중", "산책", "기록 참여도", "간식", "식사"],
  size = 330,
  maxValue = 100, //고정
  levels = 5, //고정
  showDataPoints = false, // 데이터 포인트 표시 여부
  showDataStroke = false, // 데이터 영역 테두리 표시 여부
  colors = {
    grid: "#E0E0E0",
    gridText: "#ABABAB",
    data: "#35E3E0",
    dataFill: "rgba(53, 227, 224, 0.4)",
    labels: "#3C3C3C",
    black: "#3C3C3C",
  },
}: RadarChartCardProps) => {
  const center = size / 2;
  const radius = (size - 80) / 2;

  // 각 축의 각도 계산 (5개 축, 위쪽부터 시계방향)
  // angleStep은 전체 원을 레이블 개수로 나누어 축 사이의 각도 간격을 결정
  const angleStep = (2 * Math.PI) / labels.length;

  // 좌표 계산 함수
  const getCoordinate = (angle: number, distance: number) => {
    const x = center + distance * Math.cos(angle - Math.PI / 2);
    const y = center + distance * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };

  // 그리드 레벨 생성
  const generateGridLevels = () => {
    const gridLevels = [];

    for (let level = 1; level <= levels; level++) {
      const levelRadius = (radius * level) / levels;
      const points = [];

      for (let i = 0; i < labels.length; i++) {
        const angle = i * angleStep;
        const coord = getCoordinate(angle, levelRadius);
        points.push(`${coord.x},${coord.y}`);
      }

      gridLevels.push(
        <Polygon
          key={level}
          points={points.join(" ")}
          fill="none"
          stroke={colors.grid}
          strokeWidth={1}
        />
      );
    }

    return gridLevels;
  };

  // 축 라인 생성
  const generateAxisLines = () => {
    const lines = [];

    for (let i = 0; i < labels.length; i++) {
      const angle = i * angleStep;
      const coord = getCoordinate(angle, radius);

      lines.push(
        <Line
          key={i}
          x1={center}
          y1={center}
          x2={coord.x}
          y2={coord.y}
          stroke={colors.grid}
          strokeWidth={1}
        />
      );
    }

    return lines;
  };

  // 데이터 폴리곤 생성
  const generateDataPolygon = () => {
    const points = [];

    for (let i = 0; i < data.length; i++) {
      const angle = i * angleStep;
      const value = Math.min(data[i], maxValue); // 최대값 제한
      const distance = (radius * value) / maxValue;
      const coord = getCoordinate(angle, distance);
      points.push(`${coord.x},${coord.y}`);
    }

    return (
      <Polygon
        points={points.join(" ")}
        fill={colors.dataFill}
        stroke={showDataStroke ? colors.data : "none"}
        strokeWidth={showDataStroke ? 2 : 0}
      />
    );
  };

  // 데이터 포인트 생성
  const generateDataPoints = () => {
    const points = [];

    for (let i = 0; i < data.length; i++) {
      const angle = i * angleStep;
      const value = Math.min(data[i], maxValue);
      const distance = (radius * value) / maxValue;
      const coord = getCoordinate(angle, distance);

      points.push(
        <Circle key={i} cx={coord.x} cy={coord.y} r={3} fill={colors.data} />
      );
    }

    return points;
  };

  // 레이블 생성
  const generateLabels = () => {
    const labelElements = [];

    for (let i = 0; i < labels.length; i++) {
      const angle = i * angleStep;
      const labelDistance = radius + 25;
      const coord = getCoordinate(angle, labelDistance);

      labelElements.push(
        <SvgText
          key={i}
          x={coord.x}
          y={coord.y + 5}
          fontSize={16}
          fill={colors.black}
          textAnchor="middle"
          alignmentBaseline="middle"
          fontFamily="Pretendard-Medium"
        >
          {labels[i]}
        </SvgText>
      );
    }

    return labelElements;
  };

  // 스케일 숫자 생성
  const generateScaleNumbers = () => {
    const scaleNumbers = [];

    for (let level = 1; level < levels; level++) {
      const value = (maxValue * level) / levels;
      const levelRadius = (radius * level * SCALE_FACTOR) / levels;

      scaleNumbers.push(
        <SvgText
          key={level}
          x={center}
          y={center + levelRadius + 11}
          fontSize={8}
          fill={colors.gridText}
          textAnchor="middle"
          fontFamily="Pretendard-Medium"
        >
          {value}
        </SvgText>
      );
    }

    return scaleNumbers;
  };

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* 그리드 레벨 */}
        {generateGridLevels()}

        {/* 축 라인 */}
        {generateAxisLines()}

        {/* 데이터 폴리곤 */}
        {generateDataPolygon()}

        {/* 데이터 포인트 */}
        {showDataPoints && generateDataPoints()}

        {/* 레이블 */}
        {generateLabels()}

        {/* 스케일 숫자 */}
        {generateScaleNumbers()}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RadarChartCard;
