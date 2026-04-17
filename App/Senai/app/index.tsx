import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/SENAI.png')} />
      <Text style={styles.text}>Bem-vindo ao SENAI!</Text>

      <Button
        title="Sobre"
        onPress={() => router.push('/sobre')}
      />
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold'
    },
  });