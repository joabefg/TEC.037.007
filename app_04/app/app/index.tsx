import { View, Text, StyleSheet, Image,  } from 'react-native';

export default function Index() {
    return (
        <View style = {}
    )
}
export default function Index() {
    return(
        <View>
            <Image soure = {require("@/")} />
            <Text style = {Style.titulo}>Log In</Text>
        </View>
    )
}
const Style = StyleSheet.create({
    container: {
        flex: 1,
        padding:32
    },
    titulo: {
        fontSize: 32,
        fontweight: 900
    },
    img: {
        width: '100%'
    }


})