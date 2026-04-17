import  React  from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
export default function Index () {
    return(
        <View style={styles.container}>
        <Text style={estilos.title}>Bem-vindo ao Senai!</Text>
        <Link style={estilos.button} href="/detalhes">Sobre</Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})