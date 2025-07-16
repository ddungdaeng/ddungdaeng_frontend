import { Text, View, StyleSheet } from "react-native";
import Character from "../../assets/character.svg";
import CustomText from "../common/CustomText";

export default function CharacterLoad(){
    return(
        <View style={styles.container}>
            <Character width={200} height={200} />
            <CustomText w="bold" style={styles.dogName}>소금이</CustomText>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    dogName:{
        marginTop: 4,
        fontSize: 22,
    }
})