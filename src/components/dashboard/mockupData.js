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
  { value: 6, label: "6/30" },
  { value: 6.4, label: "7/1" },
  { value: 6.2, label: "7/2" },
  { value: 6.7, label: "7/3" },
  { value: 6.5, label: "7/4" },
  { value: 7, label: "7/5" },
];
