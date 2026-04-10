import {View, Text,StyleSheet, Button} from 'react-native';
import {Link, useRouter} from 'expo-router';
import { globalStyles } from '../constants/globalStyles';

export default function Index() {
const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>Página de detalhes</Text>
      <Link href="/login" style={globalStyles.botao}>Sair</Link>
      <Button title="Voltar para início" 
      onPress={() => {
        router.dismissAll();
                router.replace("/login")} }
        />
    </View>
  );
}

