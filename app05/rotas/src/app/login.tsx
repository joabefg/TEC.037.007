import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página de login</Text>

            <Link href="/detalhes" asChild>
                <Text style={{ color: "blue", marginTop: 10 }}>
                    Ir para detalhes
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