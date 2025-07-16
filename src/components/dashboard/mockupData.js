import MealIcon from "../../assets/ic-meal.svg"
import WalkIcon from "../../assets/ic-walk.svg"
import SnackIcon from "../../assets/ic-snack.svg"    
    
    export const summaryData = [
    {
    id:1,
    category: "식사",
    data: "80g",
    recent: "+30g",
    icon: <MealIcon/>
    },
    {
    id:2,
    category: "산책",
    data: "80g",
    recent: "+5분",
    icon: <WalkIcon/>
    },
    {
    id:3,
    category: "간식",
    data: "80g",
    recent: "28분 전",
    icon: <SnackIcon/>
    },
]