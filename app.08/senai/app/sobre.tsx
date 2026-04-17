import {View, Text, StyleSheet} from "react-native";


export default function(){
    return(
        <View style={style.container}>
            <Text style={style.title}>Sobre</Text>
            <Text>Informações sobre o Senai</Text>
        </View>
    )

    
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: 32, 
        fontWeight: 900,
        
    },
})