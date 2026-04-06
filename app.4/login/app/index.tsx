import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input} from '@/components/input';

export default function Index(){
    return(
        
        <View style={style.container}>
            <Image source={require("@/assets/robo-bbb-1.png")}></Image>
            <Text style={style.titulo}>Log IN</Text>
            <Input placeholder ='E-mail' keyboardType='email-address'/>
            <Input placeholder ='Password' secureTextEntry/>
            <TouchableOpacity style= {style.botao}>
               Entrar
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:32
    },
    titulo:{
        fontSize: 32,
        fontWeight: 900
    },
    img:{
        width: '100%'
    },
    botao: {
        width:'100%',
        height: 48,
        backgroundColor: '#ff6d53',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        color: '#ff4'

    }

})
