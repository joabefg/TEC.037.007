import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Index() {

     return (
          <View style={estilo.conteiner}>
               <Image
                    source={require("@/assets/header_logo.svg")}
                    style={estilo.imagem} />
               <Text style={estilo.titulo}>React Native</Text>
               <Text style={estilo.subtitulo}>
                    {`Aprenda uma vez, \nescreva em qualquer lugar`}
               </Text>
               <View style={estilo.containerBotoes}>
                    <Link href="/" style={estilo.botao}>
                         <Text>Começando</Text>
                    </Link>
                    <Link href="/" style={estilo.botaoSec}>
                         <Text>Documentos</Text>
                    </Link>
               </View>


          </View>
     )

}

const estilo = StyleSheet.create({
     conteiner: {
          flex: 1,
          backgroundColor: 'rgb(27, 27, 29)',
          padding: 32,
          justifyContent: "center",
          alignItems: "center"
     },
     imagem: {
          margin: 25
     },
     titulo: {
          fontSize: 40,
          fontWeight: 700,
          color: 'rgb(277, 277, 277)'
     },
     subtitulo: {
          fontSize: 25,
          fontWeight: 500,
          color: 'rgb(193, 193, 196)',
          textAlign: "center"
     },
     botao: {
          flex: 1,
          fontSize: 17,
          fontWeight: 700,
          backgroundColor: 'rgb(88, 196, 220)',
          color: 'rgb(27, 27, 29)',
          padding: 17,
          borderRadius: 30,
          textAlign: 'center'
     },
     botaoSec: {
          flex: 1,
          fontSize: 17,
          fontWeight: 700,
          backgroundColor: 'rgb(27, 27, 29)',
          color: 'white',
          padding: 17,
          border: '1px solid rgb(78, 86, 104)',
          textAlign: 'center',
          borderRadius: 30
     },
     containerBotoes: {
          flexDirection: 'row', // Alinha os itens horizontalmente
          justifyContent: 'space-between', // Cria espaço entre eles (ou use 'center')
          marginTop: 20,
          gap: 10
     },
})