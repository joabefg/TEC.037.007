import {View, StyleSheet, Image, Text} from 'react-native';

export default function Index() {
  return(
    <View style={estilo.container}>
        <Image source={require("@/assets/header_logo.svg")} />
        <Text  style={estilo.titulo}>React Native</Text>
        <Text>Aprenda uma vez, escreva em qualquer lugar!</Text>
    </View>
  )
}

const estilo = StyleSheet.create({
    container: {
        flex:1, //prioridade
        backgroundColor: 'rgb(27, 27, 29)',
        justifyContent: "center",
        alignItems: "center",
    },
titulo:{
    fontSize: 40,
    fontWeight: 700,
    color: 'white'
}
})
