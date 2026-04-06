import { View, Text, StyleSheet, Image } from 'react-native';

export default function Index() {
    return (
       <View style={style.container}>
        <Image source={require("@/assets/logosenai.png")}/>
        <Text style={style.titulo}>Login</Text>

       </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        padding: 32
    },
    titulo:{
        fontSize: 32,
        fontWeight: 900
    },
    img:{
        width: '100%'
    }
})