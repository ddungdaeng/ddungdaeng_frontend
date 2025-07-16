import { Text, View, StyleSheet, ViewStyle } from "react-native";
import shadows from "../shadow";
import colors from "../colors";

type BasicCardListProps = {
    style?: ViewStyle;
}

export default function BasicCard({style}: BasicCardListProps){
    return(
        <View style={[styles.container, style]}>
            <Text style={{color: colors.gray2}}>아직 등록된 데이터가 없어요!</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        minWidth:342,
        minHeight:106,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 21,
        ...shadows.basic
    }
}) 