import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
    return (
        
        <View style={styles.container}>
            
             <Image source={require('../assets/images/senais.png')} 
             style={styles.image}
             />
            <Text style={styles.text}>Sobre</Text>
                <Text style={styles.text}>O Serviço Nacional de Aprendizagem Industrial (SENAI) é uma instituição brasileira de educação profissional e tecnológica, fundada em 1942. O SENAI oferece cursos técnicos, de qualificação profissional e de aprendizagem industrial, com o objetivo de preparar os trabalhadores para o mercado de trabalho e contribuir para o desenvolvimento da indústria no Brasil.</Text>

          
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    title : {
        marginTop: 20,
        fontSize: 34,
        fontWeight: 'bold',},
    text: {        marginTop: 20,
        fontSize: 18,
        textAlign: 'justify',
    },
});

           
          