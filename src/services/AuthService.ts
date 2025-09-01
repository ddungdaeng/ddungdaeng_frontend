import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, logout, unlink } from "@react-native-kakao/user"; // 실제 사용하는 라이브러리
import { Instance } from "./AxiosInstance";
import { REFRESH_TOKEN, TOKEN_KEY } from "../constants/constants";

//카카오 로그인
export const kakaoLogin = async (): Promise<boolean> => {
  try {
    //카카오 로그인으로 액세스 토큰 획득
    const loginResult = await login();
    console.log("카카오 로그인 성공:", loginResult);

    if (!loginResult || !loginResult.accessToken) {
      throw new Error("카카오 로그인 실패: 액세스 토큰이 없습니다.");
    }

    console.log("카카오 액세스 토큰:", loginResult.accessToken);

    //백엔드로 카카오 토큰 전송하여 JWT 토큰 받기
    const response = await Instance.post("/members/login/kakao", {
      kakaoAccessToken: loginResult.accessToken,
    });

    console.log("백엔드 응답:", response.data);

    //JWT 토큰 저장 AsyncStorage
    if (response.status === 200) {
      const jwtToken = response.data.result?.accessToken;
      console.log("추출한 JWT 토큰:", jwtToken);

      if (jwtToken) {
        await AsyncStorage.setItem(TOKEN_KEY, jwtToken);
        console.log("JWT 토큰 저장 완료");

        //리프레시 토큰 저장
        const refreshToken = response.data.result?.refreshToken;
        if (refreshToken) {
          await AsyncStorage.setItem(REFRESH_TOKEN, refreshToken);
          console.log("refresh 토큰 저장 완료");
        }
        return true; // 로그인 성공
      } else {
        throw new Error("백엔드에서 JWT 토큰을 받지 못했습니다.");
      }
    } else {
      throw new Error("백엔드 인증 실패");
    }
  } catch (error) {
    console.error("로그인 오류:", error);
    return false; // 로그인 실패
  }
};

//로그인 상태 확인
export const checkAuthStatus = async (): Promise<boolean> => {
  try {
    const jwtToken = await AsyncStorage.getItem(TOKEN_KEY);

    if (!jwtToken) {
      console.log("저장된 JWT 토큰이 없습니다.");
      return false;
    }

    // JWT 토큰 유효성 검증
    const response = await Instance.get("/members/test/auth");

    if (response.status === 200) {
      // console.log("유효한 JWT 토큰입니다.");
      return true;
    }

    return false;
  } catch (error) {
    console.log("JWT 토큰이 유효하지 않습니다.");
    await clearToken();
    return false;
  }
};

//로그아웃(카카오+ 백엔드)
export const kakaoLogout = async (): Promise<void> => {
  try {
    // 1. 백엔드 로그아웃 API 호출
    try {
      await Instance.post("/members/logout");
    } catch (error) {
      console.log("백엔드 로그아웃 실패:", error);
    }

    // 2. 카카오 로그아웃
    const logoutResult = await logout();
    console.log("카카오 로그아웃 성공", logoutResult);

    // 3. 로컬 JWT 토큰 삭제
    await clearToken();

    console.log("전체 로그아웃 완료");
  } catch (error) {
    console.error("로그아웃 오류:", error);
    // 에러가 발생해도 로컬 토큰은 삭제
    await clearToken();
  }
};

//JWT 토큰 삭제
export const clearToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
    console.log("JWT 토큰 삭제 완료");
  } catch (error) {
    console.error("토큰 삭제 오류:", error);
  }
};

//저장된 JWT 토큰 가져오기
export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error("토큰 조회 오류:", error);
    return null;
  }
};

//계정 탈퇴 (카카오 + 백엔드)
export const kakaoUnlink = async (): Promise<boolean> => {
  try {
    // 1. 백엔드 탈퇴 API 호출 (아직 api 안 나옴)
    // await Instance.delete("/members/withdraw");
    console.log("백엔드 회원 탈퇴 성공");

    // 2. 카카오 연결 끊기
    const unlinkResult = await unlink();
    console.log("카카오 회원 탈퇴 성공", unlinkResult);

    // 3. 로컬 JWT 토큰 삭제
    await clearToken();

    console.log("전체 계정 탈퇴 완료");
    return true;
  } catch (error) {
    console.error("계정 탈퇴 오류:", error);
    return false;
  }
};
