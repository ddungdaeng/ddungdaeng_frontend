import colors from "../../styles/colors";

export const weightData = [
  { dataPointText: 6, value: 6, label: "6/30" },
  { value: 6.4, label: "7/1" },
  { value: 6.2, label: "7/2" },
  { value: 6.7, label: "7/3" },
  { value: 6.5, label: "7/4" },
  { value: 7, label: "7/5" },
];

export const barData = [
  { value: 2, label: "M", frontColor: "#FF9C9C" },
  { value: 1, label: "T" },
  { value: 1, label: "W" },
  { value: 2, label: "T", frontColor: "#FF9C9C" },
  { value: 3, label: "F", frontColor: "#FF9C9C" },
  { value: 2, label: "S", frontColor: "#FF9C9C" },
  { value: 1, label: "S" },
];

export const walkData = [
  { value: 200, label: "M" },
  { value: 240, label: "T" },
  { value: 745, label: "W", frontColor: "#FF9C9C" },
  { value: 280, label: "T" },
  { value: 600, label: "F", frontColor: "#FF9C9C" },
  { value: 256, label: "S" },
  { value: 300, label: "S", frontColor: "#FF9C9C" },
];

export const stackData = [
  {
    stacks: [
      { value: 20, color: colors.primary2 },
      { value: 10, color: "#FFD1D8" },
    ],
    label: "M",
  },
  {
    stacks: [
      { value: 15, color: "#D4FFE5" },
      { value: 10, color: colors.primary2 },
      { value: 11, color: "#FFD1D8" },
    ],
    label: "T",
  },
  {
    stacks: [
      { value: 7, color: colors.primary2 },
      { value: 14, color: "#FFD1D8" },
    ],
    label: "W",
  },
  {
    stacks: [
      { value: 10, color: "#D4FFE5" },
      { value: 7, color: colors.primary2 },
      { value: 11, color: "#FFD1D8" },
    ],
    label: "T",
  },
  {
    stacks: [
      { value: 20, color: colors.primary2 },
      { value: 10, color: "#FFD1D8" },
    ],
    label: "F",
  },
];

//healthChart.tsx
export const chartData = [
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

//마이페이지
export const profileData = {
  profileImage:
    "https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20230530164604_23407b9f0798dca30e3d5be5968421b4.jpg",
  name: "김운학",
  petName: "댕댕이",
};

//마이페이지-통계
export const statsData = {
  totalRecords: 3,
  walkDays: 1,
  weightRecords: 3,
};

//마이페이지-오늘의 목표 달성률
export const pieData = [
  { value: 80, color: colors.primary1 },
  { value: 30, color: colors.gray300 },
];

//마이페이지-이번주 목표 달성도
export const weeklyData = [
  { value: 3, label: "월" },
  { value: 3, label: "화" },
  { value: 3, label: "수" },
  { value: 3, label: "목" },
  { value: 5, label: "금", frontColor: colors.primary1 },
  { value: 4, label: "토", frontColor: colors.primary1 },
  { value: 3, label: "일" },
];
