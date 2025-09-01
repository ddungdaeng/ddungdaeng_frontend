import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_KEY } from "../constants/constants";

export const Instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

// 요청 인터셉터-> 모든 요청에 JWT 토큰을 헤더에 추가
Instance.interceptors.request.use(
  async (config) => {
    try {
      // AsyncStorage에서 JWT 토큰 가져오기
      const jwtToken = await AsyncStorage.getItem(TOKEN_KEY);

      if (jwtToken) {
        // Authorization 헤더에 Bearer 토큰 추가
        config.headers["Authorization"] = `Bearer ${jwtToken}`;
        console.log("JWT 토큰이 헤더에 자동 추가됨");
      }
    } catch (error) {
      console.error("JWT 토큰 가져오기 실패:", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
