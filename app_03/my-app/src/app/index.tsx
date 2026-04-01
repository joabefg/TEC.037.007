import { View, Text, StyleSheet, Image } from 'react-native';

export default function Index() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.texto}>Hello, World!</Text>
      <Text style={estilo.texto}>Este é o meu site para teste de React Native Web.</Text>
      <Image source={require('@/assets/React-icon.svg.png')} />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 40,
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: 700,
  }
});
