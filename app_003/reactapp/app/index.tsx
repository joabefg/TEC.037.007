import { View,StyleSheet,Image, Text } from 'react-native';

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
        
    }
})

export default function Index(){
    return(
        <View style={estilo.conteiner}>
            <Image source={require("@/assets/react.svg")} />
            <Text style={estilo.titulo}> React Native</Text>
            <Text> Aprenda uma vez, escreva em qualquer lugar </Text>
        </View>
    )
}