import {View, StyleSheet, Image, Text, text} from 'react-native';

export default function Index() {
    return (
        <View style={estilo.conteiner}>
            <Image source={require("@/assets/header_logo.svg")} />
            <Text style={estilo.titulo}>React Native</Text>
            <text style={estilo.titulo}>Aprenda uma vez, escreva em qualquer lugar.</text>
        </View>
    )
}
const estilo = StyleSheet.create({
    conteiner: {
        flex: 1,  //prioridade
        backgroundColor: 'rgb(27, 27, 29)', // cor de fundo
        justifyContent: "center", // alinha no centro horizontal
        alignItems: "center", // alinhar no centro vertical
    },
    titulo:{
        fontSize: 40,
        fontWeight: 700,
        color:'white'
    }
})