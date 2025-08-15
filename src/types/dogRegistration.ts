//반려견 기본 정보
export interface DogInfo {
  name: string;
  breed: string;
  gender: string;
  age: string;
  isNeutered: string;
  photo: string;
}

//반려견 등록 단계 구성
export interface StepConfig {
  key: keyof DogInfo;
  title: string;
  label?: string;
  placeholder: string;
  type: "text" | "dropdown" | "photo";
  options?: string[];
  validation?: (value: string) => boolean;
}
