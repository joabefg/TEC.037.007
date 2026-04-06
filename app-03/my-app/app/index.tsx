import { View, Text, StyleSheet, Image } from 'react-native'
import { Input }
    from '@/components/input'
    
export default function Index() {
    return (
        <view style={style.container}>
            <Image style={style.img}
            source={require("@/assets/images/SESI_logo_2024.png")}/>
            <Text style={style.titulo}>Log In</Text>
        </view>
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
    }
})