import MealIcon from "../../assets/ic-meal.svg";
import WalkIcon from "../../assets/ic-walk.svg";
import SnackIcon from "../../assets/ic-snack.svg";

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
  { value: 2, label: "M", frontColor: "#177AD5" },
  { value: 1, label: "T" },
  { value: 1, label: "W" },
  { value: 2, label: "T", frontColor: "#177AD5" },
  { value: 3, label: "F", frontColor: "#177AD5" },
  { value: 2, label: "S", frontColor: "#177AD5" },
  { value: 1, label: "S" },
];

export const walkData = [
  { value: 250, label: "M" },
  { value: 500, label: "T", frontColor: "#177AD5" },
  { value: 745, label: "W", frontColor: "#177AD5" },
  { value: 320, label: "T" },
  { value: 600, label: "F", frontColor: "#177AD5" },
  { value: 256, label: "S" },
  { value: 300, label: "S" },
];
