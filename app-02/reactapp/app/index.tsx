import { View, StyleSheet, Image } from 'react-native'

export default function Index() {
    return (
        <View style={estilo.conteiner}>
            <Image source={require("@/assets/header_logo.svg")} />
            <text> style={estilo,titulo}>React Native </text>
        </View> 
    )
}

const estilo = StyleSheet.create({
    conteiner: {
        flex: 1, // prioridade
        backgroundColor: 'rgb(27, 27, 29)',// cor de  fundo
        justifyContent: "center", // alinhar no centro horiz
        alignItems:"center", //
    }
})