import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
    return (
        <View style={estilo.container}>
            <Image source={require("../assets/images/logo_senai.png")}/>
            <Text>Bem vindo ao Senai!</Text>
            <Button
                title="Sobre"
                onPress={() => {
                    router.push('/sobre');
                }} />
        </View>
    )
}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

});

