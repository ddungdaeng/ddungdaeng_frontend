import React, { useCallback, useMemo, useRef } from "react";
import colors from "../../styles/colors";
import { View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CustomText from "../../components/common/CustomText";
import Calendar from "../../components/detail/Calendar";
export default function Detail() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  //todo: 스타일 수정 필요
  //todo: 뒷배경 누르면 모달창 닫아지기

  const snapPoints = useMemo(() => ["23%", "40%"], []); //처음 올릴 때 23%, 더 올리면 40%

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        {/*여기에 내용 추가 */}
        <View style={{ alignItems: "center" }}>
          <Calendar />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          // backdropComponent={renderBackdrop} //뒷배경 누르면 모달창 닫기(but, 이거하면 윗 내용이 배경이 됨..)
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.4,
            shadowRadius: 8,

            elevation: 13,
          }}
        >
          <BottomSheetView style={styles.contentContainer}>
            <CustomText w="semibold" style={styles.title}>
              오늘의 기록
            </CustomText>
            <View style={styles.row}>
              <View style={styles.left}>
                <CustomText w="semibold" style={styles.score}>
                  82점
                </CustomText>
                <View style={styles.summary}>
                  <CustomText style={styles.summaryText}>
                    산책 1회 30분
                  </CustomText>
                  <CustomText style={styles.summaryText}>
                    식사 2회 150g
                  </CustomText>
                  <CustomText style={styles.summaryText}>간식 4회</CustomText>
                </View>
                <CustomText style={styles.comment}>
                  “간식은 조금 많았지만{"\n"}산책은 잘했어요”
                </CustomText>
              </View>
              <View style={styles.right}>
                <CustomText w="medium" style={styles.gray}>
                  오전 11:00 산책 30분
                </CustomText>
                <CustomText w="medium" style={styles.gray}>
                  오후 1:00 사료 80g
                </CustomText>
                <CustomText w="medium" style={styles.gray}>
                  오후 4:00 사료 80g
                </CustomText>
                <CustomText w="medium" style={styles.gray}>
                  오후 7:00 사료 80g
                </CustomText>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 47,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginVertical: 30,
    marginHorizontal: 66,
  },
  title: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
  },
  left: {
    flex: 1,
    gap: 20, //왼쪽 데이터 간격(점수, 요약, 멘트)
  },
  score: {
    fontSize: 40,
  },
  summary: {
    gap: 5,
  },
  summaryText: {
    fontSize: 14,
    color: colors.gray2,
  },
  gray: {
    color: colors.gray2,
    fontSize: 14,
  },
  comment: {
    fontSize: 14,
    fontStyle: "italic",
  },
  right: {
    flex: 1,
    gap: 15,
    alignItems: "flex-end",
    alignSelf: "flex-end",
  },
});
