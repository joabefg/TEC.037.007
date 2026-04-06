import { View,StyleSheet,Image, Text } from 'react-native';
import { Link } from 'expo-router';

const estilo = StyleSheet.create({
    conteiner : {
        flex: 1,//prioridade
        backgroundColor: 'rgb(27, 27, 29)',//fundo cor 
        alignItems: 'center',//alinhamento horizontal
        justifyContent: 'center',//alinhamento vertical
    },
    titulo:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'rgb(277,277,277)',
        
    },
    subtitulo:{
         fontSize: 25,
        fontWeight: 'bold',
        color: 'rgb(193,193,196)',
        textAlign: 'center',
    },
    botao:{
        fontSize:17,
        backgroundColor:'rgb(88,196,220)',
        color: 'rgb(27, 27, 29)',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    btnGroup:{
        flexDirection:'row',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 20,

    }
})

export default function Index(){
    return(
        <View style={estilo.conteiner}>
            <Image source={require("@/assets/react.svg")} />
            <Text style={estilo.titulo}> React Native</Text>
            <Text style={estilo.subtitulo}> Aprenda uma vez, escreva em qualquer lugar </Text>
            <View style={estilo.btnGroup}>
                <Link href='/' style={estilo.botao}>Começando</Link>
                <Link href='/' style={estilo.botao}>Documentos</Link>
            </View>
        </View>
    )
}