import { View, Text, StyleSheet} from 'react-native';
import { Link} from 'expo-router';
import { estilo } from '@/constants/globalStyles';

export default function Index() {
    return (
        <View style={estilo.container}>
            <Text style={estilo.title}>Paguna Inicial</Text>
            <Link style = {estilo.button} href= "/detalhes">Detalhes</Link>
        </View>
    )
}
