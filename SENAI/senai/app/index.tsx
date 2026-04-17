import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
    const router = useRouter();
    return (
        
        <View style={styles.container}>
            
            <Text style={styles.text}>Bem vinado ao SENAI</Text>
             <Image source={require('../assets/images/senais.png')} />

            <Button
            title="Sobre"
            onPress={() => router.push('/sobre')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold',
    },    
});
           
          