import { View, Text, StyleSheet, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { estilos } from '@/constants/globalStyles';

export default function detalhes() {
    const router = useRouter();
    return (
        <View style={estilos.container}>
            <Text style={estilos.title}>Página de Detalhes</Text>
            <Link href="/login" style={estilos.button}>Sair</Link>
            <Button title='Realizar logout'
                onPress={() => {
                    router.dismissAll();
                    router.replace("/login")
                }} />
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