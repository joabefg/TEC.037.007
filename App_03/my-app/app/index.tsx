import { View, Text, StyleSheet, Image } from 'react-native';
import{ Link} from 'expo-router';

export default function Index() {
  return (
    <View style={estilo.container}>
      <Image source={require('@/assets/React_logo.svg')} />
      <Text style={estilo.texto}>Hello, World!</Text>
      <Text style={estilo.subtitulo}>Este é o meu site para teste de React Native Web.</Text>
      
    <View style={estilo.btnGroup}> 
    <Link href="/" style={estilo.botao}>Iniciar</Link>
    <Link href="/" style={estilo.botao}>Documentos</Link>
    </View>
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
  },
  subtitulo : {
    fontSize: 30, 
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: 600,
  },
  botao : {
    fontSize: 17,
    backgroundColor :  ' rgb(88,196,220)',
    color: 'rgb(27,27, 29)',
    padding: 17,
    borderRadius: 30
  },
  btnGroup : {
    flexDirection:'row',
    justifyContent: 'space-between',
    gap: 10,
   marginTop : 20 
  }
});

