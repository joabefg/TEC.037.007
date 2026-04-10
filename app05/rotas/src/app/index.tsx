import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página Inicial</Text>
            <Link href="/detalhes"><Text>Detalhes</Text></Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold"
    }
});
