import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Sobre() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Página de Detalhes</Text>
            <Link href="/index" style={estilos.button}>Sobre</Link>
            <Link href="/"></Link>
            <Button title='Realizar logout'
            onPress={() => {
                router.dismissAll();
                router.replace("/index")
            }}></Button>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
