import { Text, View, StyleSheet } from "react-native";
import colors from "../../colors";
import shadows from "../../shadow";

type SummaryCardProps ={
    category: string,
    data: string,
    recent: string,
    icon: React.ReactElement
    
}

export default function SummaryCard({category, data, recent, icon}: SummaryCardProps){
    return(
        <View style={styles.card}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.data}>{data}</Text>
            <Text style={styles.recent}>{recent}</Text>
            <View style={styles.iconContainer}>
                {icon}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        minWidth: 103,
        minHeight: 132,
        backgroundColor: colors.primary1,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: colors.white,
        padding: 14,
        justifyContent: 'space-between',
        ...shadows.basic
    },
    iconContainer: {
        alignItems: "flex-end",
        justifyContent: 'center',
        height: 40,
    },
    category: {
        fontSize: 14,
        color: colors.black,
        marginBottom: 4,
    },
    data: {
        fontSize: 24,
        fontWeight: "500",
        color: colors.black,
        marginBottom: 2,
    },
    recent: {
        fontSize: 10,
        color: colors.gray2,
        marginBottom: 12,
    }
})