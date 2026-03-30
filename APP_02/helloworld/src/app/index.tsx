import {Text,View,StyleSheet} from 'react-native'

export default function Index(){
    return(
        <view style={estilo.container}>
            <text> Hello </text>
            <text> World</text>
        </view>
    )
}

const estilo = StyleSheet.create({
    container : {
         flex: 1,
         justifyContent : "center",
         alignItems: "center",

    },
    texto:{
        fontSize: 24,
        fontWeight:'bold',
    }
})








































