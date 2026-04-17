import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/SENAI.png')} 
        style={styles.image}
      />

      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        O SENAI (Serviço Nacional de Aprendizagem Industrial) é uma instituição
        brasileira voltada para a educação profissional e tecnológica, formando
        trabalhadores para a indústria e promovendo inovação e desenvolvimento
        industrial.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    position: 'absolute',
    top: 20,
    left: -100,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 120,
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
  },
});