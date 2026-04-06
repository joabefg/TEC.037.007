import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input } from '@/components/input';

export default function Index() {
    return (
        <View style={style.container}>
            <Image style={style.img} 
                source={require("@/assets/senai.png")} />
            <Text style={style.titulo}>Log In</Text>
            <Input placeholder='E-mail' keyboardType='email-address'/>
            <Input placeholder='Senha' secureTextEntry />
            <TouchableOpacity style={style.botao}>
                Entrar
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
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
    botao: {
        width: '100%',
        height: 48,
        backgroundColor: '#3366FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        color: '#FFF'
    }
})
