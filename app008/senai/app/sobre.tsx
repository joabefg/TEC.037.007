import { StyleSheet, Text, View } from 'react-native';

export default function index(){
    return(
        <View>
            <Text style={estilo.titulo}> Sobre </Text>
            <Text style={estilo.texto}>
              O Serviço Nacional de Aprendizagem Industrial, mais conhecido pela sigla SENAI, é indiscutivelmente uma das instituições mais importantes para o desenvolvimento econômico e tecnológico do Brasil. 
              Criado em um contexto histórico específico, o SENAI evoluiu para se tornar o maior complexo de educação profissional da América Latina e uma referência mundial em inovação industrial
            </Text>
        </View>
    )
}

const estilo=StyleSheet.create({
    titulo:{
         fontSize: 32,
        fontWeight: 900,
    },
    texto:{
            fontSize: 16,
            marginTop: 16,
            textAlign: 'justify',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
    }
})