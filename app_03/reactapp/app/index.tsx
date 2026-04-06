import { View, StyleSheet, Image, Text } from 'react-native';
import { Link } from 'expo-router';

/*export default function Index() {
    return(
        <View style={estilo.conteiner}></View>
    )
}*/

export default function Index() {
    return(
        <View style={estilo.conteiner}>
            <Image source={require ("@/assets/images/header_logo.svg")} />
            <Text style ={estilo.titulo}> React Native </Text>
            <Text style = { estilo.subtitulo}>React Native</Text>
            <Text>Aprenda uma vez, escreva em qualquer lugar.</Text>

            <View>
                <Link href = '/' style = {estilo.botao}> Começando </Link>
                <Link href ='/' style ={estilo.botao}> Documento </Link>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    conteiner: {
        flex: 1, //prioridade
        backgroundColor: 'rgb(27, 27, 29)', //cor de fundo
        justifyContent: "center", // alinhar no centro horiz
        alignItems: "center", // alinhar no centro vertical 
    },
    titulo:{
        fontSize:40,
        fontWeight: 700,
        color: 'white'
    },
    subtitulo: {
        fontSize: 25,
        fontWeight:500,
        color: 'rgb (193,193,196)',
        textAlign: 'center'
    },
    botao: {
        fontSize: 17,
        backgroundColor; 'rgb (88,196,220)',
        color: 'rgb(27, 27, 29)',
        padding: 17,
        borderRadius: 30
    },
    btnGroup: {
        flexDirection; {
            flexDirection: 'row',
            justfyContent: 'space-batwee',
            gap: 10
        }
    }
});