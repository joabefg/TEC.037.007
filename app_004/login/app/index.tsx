import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '@/components/input';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32
    },
    titulo: {
        fontSize: 32,
        fontWeight: 900
    },
    img: {
        width: '100%'
    },
    botao:{
        width: '100%',
        height: 48,
        backgroundColor: '#3366FF',
        borderRadius: 8,
        color: '#fff',
        justifyContent: 'center',
        marginTop: 16,
        alignItems: 'center',
    }
})

export default function Index(){
    return(
        <View style={estilo.container}>
            <Image style={estilo.img} source={require('@/assets/senai.jpg')} />
            <Text style={estilo.titulo}>Log In</Text>
            <Input placeholder=' E-mail' keyboardType='email-address' />
            <Input placeholder=' Password' secureTextEntry />
            <TouchableOpacity style={estilo.botao}>
               Entrar
            </TouchableOpacity>
        </View>
    )
}   