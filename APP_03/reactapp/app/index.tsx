import { View, StyleSheet, Image, Text } from 'react-native';
 
export default function Index(){
    return(
        <View style={estilo.container}>
            <Image source={require("@/assets/header_logo.svg")} />
        </View>
    )
}

const estilo = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'rgb(27, 27, 29)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 40,
        fontWeight: 700
    }
})