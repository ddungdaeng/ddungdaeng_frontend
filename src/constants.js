import { Dimensions } from "react-native";

//스크린 공통 너비 계산
export const { width: screenWidth } = Dimensions.get("window");
export const PADDING = 24; //스크린 패딩
export const CONTENT_WIDTH = screenWidth - PADDING * 2;

export const SCALE_FACTOR = 0.8;

//WeightChart
export const CARD_PADDING = 15;
export const CHART_WIDTH = CONTENT_WIDTH - CARD_PADDING * 2;

//반려견 품종 리스트
export const DOG_BREEDS = [
  "골든 리트리버",
  "불독",
  "시바견",
  "포메라니안",
  "치와와",
  "말티즈",
  "푸들",
  "허스키",
  "진돗개",
  "웰시코기",
  "보더콜리",
  "비글",
  "닥스훈트",
  "기타",
];

//에러 메시지
export const ERROR_MESSAGES = {
  required: "필수 입력 사항입니다.",
  choice: "필수 선택 사항입니다.",
};
