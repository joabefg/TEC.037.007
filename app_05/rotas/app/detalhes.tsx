import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { estilos } from '@/constants/globalStyles';

export default function Detalhes() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text>Página de Detalhes</Text>
            <Link href="/login" style={estilos.button}>Sair</Link>
            <Button title='Realizar logout'
            onPress={() => {
                router.dismissAll();
                router.replace("/login")
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