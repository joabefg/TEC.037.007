import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={estilo.container}>
      <Image style={estilo.img} source={require('@/assets/images/senai.png')} />
      <Text style={estilo.titulo}>Bem-vindo ao senai!!</Text>
      <Link href="/sobre">
        <View style={estilo.botao}>
          <Text style={estilo.botaoTexto}>Sobre</Text>
        </View>
      </Link>
    </View>
  );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 32,
        marginTop: 24,
    },
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    botao:{
        width: '200%',
        height: 50,
        backgroundColor: '#3366FF',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 24,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        width: '100%',
    },
})