import { create } from "zustand";
import { DogInfo } from "../types/dogRegistration";
import { REGISTRATION_STEPS } from "../constants/registrationSteps";

interface DogRegistrationState {
  dogInfo: DogInfo; //반려견 정보 저장
  currentStep: number; //현재 단계
  completedSteps: number[]; //완료된 단계들 배열

  updateDogInfo: (key: keyof DogInfo, value: string) => void;
  nextStep: () => void;
  getVisibleSteps: () => number[];
}

const initialDogInfo: DogInfo = {
  name: "",
  breed: "",
  gender: "",
  age: "",
  isNeutered: "",
  photo: "",
};

export const useDogRegistrationStore = create<DogRegistrationState>(
  (set, get) => ({
    dogInfo: initialDogInfo,
    currentStep: 0,
    completedSteps: [],

    updateDogInfo: (key, value) =>
      set((state) => ({
        dogInfo: { ...state.dogInfo, [key]: value },
      })),

    nextStep: () =>
      set((state) => {
        if (state.currentStep >= REGISTRATION_STEPS.length - 1) {
          return state;
        }

        const newCurrentStep = state.currentStep + 1;

        //중복 체크: 현재 단계가 이미 completedSteps에 있는지 확인
        let newCompletedSteps = state.completedSteps;
        if (!state.completedSteps.includes(state.currentStep)) {
          //없을 때만 추가
          newCompletedSteps = [state.currentStep, ...state.completedSteps];
        }

        return {
          currentStep: newCurrentStep,
          completedSteps: newCompletedSteps,
        };
      }),

    //계산된 값
    getVisibleSteps: () => {
      const { currentStep, completedSteps } = get();
      // 현재 단계를 맨 위에, 완료된 단계들을 아래에 배치
      //중복 제거 (혹시 모를 중복 방지)
      const uniqueSteps = Array.from(new Set([currentStep, ...completedSteps]));
      return uniqueSteps;
    },
  })
);
