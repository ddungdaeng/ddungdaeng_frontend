import { Dimensions } from "react-native";

//스크린 공통 너비 계산
export const { width: screenWidth } = Dimensions.get("window");
export const HORIZONTAL_PADDING = 24;
export const CONTENT_WIDTH = screenWidth - HORIZONTAL_PADDING * 2;

export const SCALE_FACTOR = 0.8;

//WeightChart
export const CARD_PADDING = 15;
export const CHART_WIDTH = CONTENT_WIDTH - CARD_PADDING * 2;
