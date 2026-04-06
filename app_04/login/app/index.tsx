import {View, Text, StyleSheet, Image} from 'react-native'
import { Input }
    from '@/components/input'

export default function Index () {
    return(
        <view style={style.conteiner}>
        <Image style={style.img} 
        source={require("@/assets/images/images.png")} />
            <Text style={style.titulo}>Login</Text>
            <Input/>       
        </view>
        

    )
    
}
const style = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 32
    },
    titulo:{ 
        fontSize: 32,
        fontWeight: 900
    },
    img: {
        width: 600,
        height: 225
    }
})