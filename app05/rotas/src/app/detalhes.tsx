import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página de detalhes</Text>

            <Link href="/login" asChild>
                <Text style={{ color: "blue", marginTop: 10 }}>
                    Sair
                </Text>
            </Link>
        </View>
    );
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