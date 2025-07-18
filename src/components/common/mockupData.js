import MealIcon from "../../assets/ic-meal.svg";
import WalkIcon from "../../assets/ic-walk.svg";
import SnackIcon from "../../assets/ic-snack.svg";
import colors from "../../colors";

export const summaryData = [
  {
    id: 1,
    category: "식사",
    data: "80g",
    recent: "+30g",
    icon: <MealIcon />,
  },
  {
    id: 2,
    category: "산책",
    data: "80g",
    recent: "+5분",
    icon: <WalkIcon />,
  },
  {
    id: 3,
    category: "간식",
    data: "80g",
    recent: "28분 전",
    icon: <SnackIcon />,
  },
];

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
  { value: 250, label: "M" },
  { value: 500, label: "T", frontColor: "#FF9C9C" },
  { value: 745, label: "W", frontColor: "#FF9C9C" },
  { value: 320, label: "T" },
  { value: 600, label: "F", frontColor: "#FF9C9C" },
  { value: 256, label: "S" },
  { value: 300, label: "S" },
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

export const radarData = [70, 80, 60, 75, 65];
