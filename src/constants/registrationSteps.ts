import { StepConfig } from "../types/dogRegistration";
import { DOG_BREEDS, GENDER_OPTIONS, NEUTER_OPTIONS } from "./dogRegistration";

export const REGISTRATION_STEPS: StepConfig[] = [
  {
    key: "name",
    title: "반려견 이름 입력",
    label: "이름",
    placeholder: "반려견 이름을 입력해 주세요",
    type: "text",
  },
  {
    key: "breed",
    title: "품종 선택",
    label: "품종",
    placeholder: "품종을 선택해 주세요",
    type: "dropdown",
    options: DOG_BREEDS,
  },
  {
    key: "gender",
    title: "반려견 성별 선택",
    label: "성별",
    placeholder: "반려견 성별을 선택해 주세요",
    type: "dropdown",
    options: GENDER_OPTIONS,
  },
  {
    key: "age",
    title: "반려견 나이 입력",
    label: "나이 (살)",
    placeholder: "0",
    type: "text",
  },
  {
    key: "isNeutered",
    title: "중성화 여부 선택",
    label: "중성화 여부",
    placeholder: "중성화 여부를 선택해 주세요",
    type: "dropdown",
    options: NEUTER_OPTIONS,
  },
  {
    key: "photo",
    title: "반려견 사진 첨부",
    placeholder: "사진을 선택해 주세요",
    type: "photo",
  },
];
