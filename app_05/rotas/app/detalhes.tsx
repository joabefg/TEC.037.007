import {View, Text, StyleSheet, Button} from 'react-native';
import {Link, useRouter} from 'expo-router';
import { estilo } from '@/constants/globalStyles';

export default function Detalhes() {
    const router = useRouter();
    return (
        <View style={estilo.container}>
            <Text style = {estilo.title}>Pagina Detalhes</Text>
            <Link href= "/login" style= {estilo.button}>Sair</Link>
            <Button title='Realizar logout' 
            onPress={() => {router.dismissAll(); 
                router.replace("/login")}} />
        </View>
    )
}
